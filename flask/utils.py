import random
import string
import datetime
def generate_random_filename(length=10):
    # 创建一个包含所有字母和数字的字符串
    characters = string.ascii_letters + string.digits
    # 从characters中随机选择length个字符
    random_chars = ''.join(random.choice(characters) for i in range(length))
    # 获取当前时间戳
    timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    # 创建文件名
    filename = f"{timestamp}_{random_chars}"
    return filename
