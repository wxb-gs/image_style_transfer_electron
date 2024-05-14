import io
import torch
import torch.nn as nn
from PIL import Image, ImageTk
from torchvision import transforms
from torchvision.utils import save_image
import os
import net
from function import adaptive_instance_normalization,coral
from utils import generate_random_filename,get_image_size
import base64
from io import BytesIO
import cv2
from tqdm import tqdm
import numpy as np
import imageio
from moviepy.editor import VideoFileClip

decoder_model_path = './models/decoder_iter_160000.pth.tar'
vgg_model_path = './models/vgg_normalised.pth'
DEFAULT_CONTENT='./input/content/avril.jpg'
DEFAULT_STYLE='./input/styles/铅笔.png'
DEFAULT_OUTPUT_DIR='./input/output/'
DEFAULT_VIDEO = './input/content/video.mp4'
DEFAULT_VIDEO_DIR = './input/video/'

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
    def test_transform(self, size=(512,512), crop=True):
        transform_list = []
        #改变图像的尺寸
        # if size:
        transform_list.append(transforms.Resize(size))
        #CenterCrop 会将图像裁剪，并且只保留图像的中心区域。
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

    def processOne(self,imgBase64,options):
          #定义变量
        device=self.device

        #取出参数，没有则为默认值
        # keys = options.keys()
        size = options.get('size',512)
        crop = options.get('crop',True)
        alpha = options.get('alpha',1.0)
        style_paths = options.get('style_paths',[DEFAULT_STYLE])
        preserve_color = options.get('preserve_color',False)
        #可以对一个content转换为不同风格;也可以对一个content转换为融合的风格
        do_interpolation = options.get('do_interpolation',False)
        weights= options.get('weights',[])
        interpolation_weights = None

        # 假设base64_str是你接收到的base64字符串
        base64_str = imgBase64

        # 分割字符串以移除MIME类型信息
        if base64_str.startswith('data:image/') and base64_str.find(';base64,') > 0:
            base64_str = base64_str[base64_str.find(';base64,') + len(';base64,'):]

        # 对base64字符串进行解码
        image_data = base64.b64decode(base64_str)



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
        #是否多风格的融合
        if do_interpolation:  # 一个图片，多种风格融合转换
            style = torch.stack([style_tf(Image.open(str(p))) for p in style_paths])
            content = content_tf(Image.open(image_data)).unsqueeze(0).expand_as(style)
            style = style.to(device)
            content = content.to(device)
            with torch.no_grad():
                output = self.style_transfer(content, style,alpha, interpolation_weights)
            return self.processImage(output)
        else:  # 一个图片,每一种风格单独转换
            for style_path in style_paths:
                content = content_tf(Image.open(image_data))
                style = style_tf(Image.open(str(style_path)))
                if preserve_color:
                    style = coral(style, content)
                style = style.to(device).unsqueeze(0)
                content = content.to(device).unsqueeze(0)
                with torch.no_grad():
                    output = self.style_transfer( content, style,alpha)
                return self.__processImage__(output)

    #处理过程
    def process(self,options):
        if not isinstance(options,dict):
            print('参数错误')
            return

        #定义变量
        device=self.device

        #取出参数，没有则为默认值
        # keys = options.keys()
        size = options.get('size',(512,512))
        crop = options.get('crop',True)
        alpha = options.get('alpha',1.0)
        content_paths = options.get('content_paths',[DEFAULT_CONTENT])
        style_paths = options.get('style_paths',[DEFAULT_STYLE])
        preserve_color = options.get('preserve_color',False)
        #可以对一个content转换为不同风格;也可以对一个content转换为融合的风格
        do_interpolation = options.get('do_interpolation',False)
        weights= options.get('weights',[])
        interpolation_weights = None

        if len(content_paths)==1:
            size = get_image_size(content_paths[0])

        #有多个风格则处理
        if do_interpolation:
            if len(style_paths) > 1:       
                #计算每一个风格权重的占比
                interpolation_weights = [w / sum(weights) for w in weights]
                print('计算完毕')
            else:
                print('参数错误,风格数量需要大于1才能融合')
                return

        print(interpolation_weights)
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
                    output = self.style_transfer(content, style ,alpha, interpolation_weights)
                return self.__processImage__(output)

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
                    return self.__processImage__(output)

    def __processImage__(self,output):
        output = output.cpu()
        output_name = os.path.join(DEFAULT_OUTPUT_DIR,generate_random_filename()+'.jpg')
        save_image(output, str(output_name))
        return os.path.abspath(output_name)
        
    # 处理视频
    def processVideo(self,options,func):
        if not isinstance(options,dict):
            print('参数错误')
            return
        #取出参数，没有则为默认值
        # keys = options.keys()
        size = options.get('size',256)
        crop = options.get('crop',True)
        alpha = options.get('alpha',1.0)
        content_video = options.get('content_video',DEFAULT_VIDEO)
        style_paths = options.get('style_paths',[DEFAULT_STYLE])
        preserve_color = options.get('preserve_color',False)
        #可以对一个content转换为不同风格;也可以对一个content转换为融合的风格
        do_interpolation = options.get('do_interpolation',False)
        weights= options.get('weights',[])
        save_ext = options.get('save_ext','.mp4')
        interpolation_weights = None
        time = options.get('time',{
            'in':1,
            'out':2
        })
        in_time = time.get('in')
        out_time = time.get('out')


        #有多个风格则处理
        if do_interpolation: 
            if len(style_paths) > 1:       
                #计算每一个风格权重的占比
                interpolation_weights = [w / sum(weights) for w in weights]
            else:
                print('参数错误,风格数量需要大于1才能融合')
                return

        device = self.device
        
        video = VideoFileClip(content_video)

        # 剪辑视频
        edited_video = video.subclip(in_time, out_time)

        # 将剪辑后的视频写入文件
        edited_video.write_videofile('./input/temp.mp4')

        content_video = cv2.VideoCapture('./input/temp.mp4')
        
        fps = int(content_video.get(cv2.CAP_PROP_FPS))
        content_video_length = int(content_video.get(cv2.CAP_PROP_FRAME_COUNT))
        output_width = int(content_video.get(cv2.CAP_PROP_FRAME_WIDTH))
        output_height = int(content_video.get(cv2.CAP_PROP_FRAME_HEIGHT))
        ratio =   output_width/output_height
        size = (size,int(size*ratio))
        content_tf = self.test_transform(size,crop)
        style_tf = self.test_transform(size,crop)


        pbar = tqdm(total = content_video_length)

        output_video_path =os.path.join(DEFAULT_OUTPUT_DIR,'_video'+generate_random_filename()+save_ext)
        writer = imageio.get_writer(output_video_path, mode='I', fps=fps)


        # 循环
        while(True):
            ret, content_img = content_video.read()
            if not ret:
                break
            output = None
            
            if do_interpolation:
                style = torch.stack([style_tf(Image.open(str(p))) for p in style_paths]).to(device)
                content = content_tf(Image.fromarray(content_img)).unsqueeze(0).expand_as(style).to(device)
                if preserve_color:
                    style = coral(style, content)
                with torch.no_grad():
                    output = self.style_transfer(content, style, alpha, interpolation_weights)
            else:
                style = style_tf(Image.open(str(style_paths[0]))).to(device).unsqueeze(0)
                content = content_tf(Image.fromarray(content_img)).to(device).unsqueeze(0)
                if preserve_color:
                    style = coral(style, content)
                with torch.no_grad():
                    output = self.style_transfer(content, style, alpha)

            output = output.cpu()
            output = output.squeeze(0)
            output = np.array(output)*255
            output = np.transpose(output, (1,2,0))
            output = np.clip(output, 0, 255).astype(np.uint8)
            output = cv2.resize(output, (output_width, output_height), interpolation=cv2.INTER_CUBIC)

            writer.append_data(np.array(output))
            pbar.update(1)
            
            func(pbar.n,pbar.total)  # 在更新进度条时调用函数


        # 释放
        content_video.release()
        pbar.close()
        
        return  os.path.abspath(output_video_path)

    # 处理数据
    def processData(self,data,options):
        if not isinstance(options,dict):
            print('参数错误')
            return
        #取出参数，没有则为默认值
        # keys = options.keys()
        size = options.get('size',256)
        crop = options.get('crop',False)
        alpha = options.get('alpha',1.0)
        style_paths = options.get('style_paths',[DEFAULT_STYLE])
        preserve_color = options.get('preserve_color',False)
        #可以对一个content转换为不同风格;也可以对一个content转换为融合的风格
        do_interpolation = options.get('do_interpolation',False)
        weights= options.get('weights',[])
        interpolation_weights = None

        # 分割字符串以提取 base64 编码的数据部分
        image_data = None
        if data.startswith('data:image/jpeg;base64,'):
            image_data = base64.b64decode(data.split(',')[1])
        elif data.startswith('data:image/png;base64,'):
            image_data = base64.b64decode(data.split(',')[1])
        # 确保 image_data 不是空的
        if not image_data:
            return
            # raise ValueError("Decoded image data is empty")

        # 使用 np.frombuffer 创建 numpy 数组，确保正确地指定了数据类型
        frame = np.frombuffer(image_data, dtype=np.uint8)

        # 现在使用 cv2.imdecode 来从 numpy 数组中解码图像
        frame = cv2.imdecode(frame, cv2.IMREAD_COLOR)

        # 检查 frame 是否为 None，如果不是 None，则表示图像已成功解码
        if frame is None:
            raise ValueError("The image data could not be decoded into an image.")
                
        with Image.open(io.BytesIO(image_data)) as img:
            width, height = img.size  # size是一个包含宽和高的元组
        size = (height,width)

        content_tf = self.test_transform(size,crop)
        style_tf = self.test_transform(size,crop)
        device = self.device
        
        style = style_tf(Image.open(str(style_paths[0]))).to(device).unsqueeze(0)
        content = content_tf(Image.fromarray(frame)).to(device).unsqueeze(0)
        if preserve_color:
            style = coral(style, content)
        with torch.no_grad():
            output = self.style_transfer(content, style, alpha)
        
        output = output.cpu()
        output = output.squeeze(0)
        output = np.array(output)*255
        output = np.transpose(output, (1,2,0))
        output = np.clip(output, 0, 255).astype(np.uint8)

        # 将numpy数组转换为PIL图像
        pil_image = Image.fromarray(output)

        # 将PIL图像保存到字节流
        buffer = BytesIO()
        pil_image.save(buffer, format='JPEG')
        return buffer.getvalue()