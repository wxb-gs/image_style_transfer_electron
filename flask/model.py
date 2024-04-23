import torch
import torch.nn as nn
from PIL import Image, ImageTk
from torchvision import transforms
from torchvision.utils import save_image
import os
import net
from function import adaptive_instance_normalization,coral
from utils import generate_random_filename

decoder_model_path = './models/decoder_iter_160000.pth.tar'
vgg_model_path = './models/vgg_normalised.pth'
DEFAULT_CONTENT='./input/content/avril.jpg'
DEFAULT_STYLE='./input/styles/scene_de_rue.jpg'
DEFAULT_OUTPUT_DIR='./input/output/'

class Model:
    def __init__(self):
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        decoder_model = net.decoder
        vgg_model = net.vgg
        decoder_model.eval()
        vgg_model.eval()

        decoder_model.load_state_dict(torch.load(decoder_model_path))
        vgg_model.load_state_dict(torch.load(vgg_model_path))
        vgg_model = nn.Sequential(*list(vgg_model.children())[:31])

        vgg_model.to(device)
        decoder_model.to(device)

        self.device=device
        self.vgg_model=vgg_model
        self.decoder_model=decoder_model


    #图像预处理转换序列,统一图像输入
    def test_transform(self, size=512, crop=True):
        transform_list = []
        #改变图像的尺寸
        if size != 0:
            transform_list.append(transforms.Resize(size))
        #CenterCrop 会将图像裁剪为正方形，并且只保留图像的中心区域。
        if crop:
            transform_list.append(transforms.CenterCrop(size))
        #ToTensor 会将 PIL 图像或 NumPy 数组转换为 PyTorch 张量，这是 PyTorch 模型输入所需的格式。
        transform_list.append(transforms.ToTensor())
        transform = transforms.Compose(transform_list)
        return transform

    
    # 风格转换过程
    # decoder 模型的输出应该是一个张量（torch.Tensor），它代表了风格化后的图像。
    def style_transfer(self, content, style, alpha=1.0,interpolation_weights=None):
        vgg= self.vgg_model
        decoder = self.decoder_model
        device = self.device

        assert (0.0 <= alpha <= 1.0)
        content_f = vgg(content)
        style_f = vgg(style)
        if interpolation_weights:
            _, C, H, W = content_f.size()
            feat = torch.FloatTensor(1, C, H, W).zero_().to(device)
            base_feat = adaptive_instance_normalization(content_f, style_f)
            for i, w in enumerate(interpolation_weights):
                feat = feat + w * base_feat[i:i + 1]
            content_f = content_f[0:1]
        else:
            feat = adaptive_instance_normalization(content_f, style_f)
        feat = feat * alpha + content_f * (1 - alpha)
        return decoder(feat)

    #处理过程
    def process(self,options):
        if not isinstance(options,dict):
            print('参数错误')
            return

        #定义变量
        device=self.device

        #取出参数，没有则为默认值
        # keys = options.keys()
        size = options.get('size',512)
        crop = options.get('crop',True)
        alpha = options.get('alpha',1.0)
        content_paths = options.get('content_paths',[DEFAULT_CONTENT])
        style_paths = options.get('style_paths',[DEFAULT_STYLE])
        preserve_color = options.get('preserve_color',False)
        #可以对一个content转换为不同风格;也可以对一个content转换为融合的风格
        do_interpolation = options.get('do_interpolation',False)
        weights= options.get('weights',[])
        interpolation_weights = None

        #有多个风格则处理
        if do_interpolation and len(style_paths) == 1:       
            print('参数错误,风格数量需要大于1才能融合')
            return
        else:
            #计算每一个风格权重的占比
            interpolation_weights = [w / sum(weights) for w in weights]

        content_tf = self.test_transform(size,crop)
        style_tf = self.test_transform(size,crop)

        #可能同时对多个content进行转换
        for content_path in content_paths:
            #是否多风格的融合
            if do_interpolation:  # 一个图片，多种风格融合转换
                style = torch.stack([style_tf(Image.open(str(p))) for p in style_paths])
                content = content_tf(Image.open(str(content_path))).unsqueeze(0).expand_as(style)
                style = style.to(device)
                content = content.to(device)
                with torch.no_grad():
                    output = self.style_transfer(content, style,alpha, interpolation_weights)
                self.processImage(output)

            else:  # 一个图片,每一种风格单独转换
                for style_path in style_paths:
                    content = content_tf(Image.open(str(content_path)))
                    style = style_tf(Image.open(str(style_path)))
                    if preserve_color:
                        style = coral(style, content)
                    style = style.to(device).unsqueeze(0)
                    content = content.to(device).unsqueeze(0)
                    with torch.no_grad():
                        output = self.style_transfer( content, style,alpha)
                    self.__processImage__(output)


    def __processImage__(self,output):
        output = output.cpu()
        output_name = os.path.join(DEFAULT_OUTPUT_DIR,generate_random_filename()+'.jpg')
        save_image(output, str(output_name))
