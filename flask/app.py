import threading
from flask_cors import CORS
from flask_socketio import SocketIO, emit 

from flask import Flask
from model import Model
from threading import Thread
from demo_edit_art_style import TextStyleTransfer

#上来就加载模型
useModel = Model()
textStyleModel = TextStyleTransfer()

app = Flask(__name__)

socketio = SocketIO(app,cors_allowed_origins='*')
CORS(app)

@socketio.on('connect')
def handle_connect():
    print('Client connected')
    print('connected')

#size
#crop
#alpha 
#content_paths 
#style_paths 
#preserve_color
#do_interpolation 
#weights
@socketio.on('message')
def handle_message(msg):
    content_paths=msg['content_paths']
    style_paths=msg['style_paths']
    weights = msg['weights']
    alpha=msg['alpha']
    # preserve_color=msg['preserve_color']
    print(style_paths)
    print(weights)
    print(alpha)
    do_interpolation = False
    if len(style_paths) > 1:
        do_interpolation = True

    result = useModel.process({
         'content_paths':content_paths,
         'style_paths':style_paths,
         'do_interpolation': do_interpolation,
         'alpha':alpha,
         'weights':weights
    })
    emit('transfer-over',{
        'filePath':result
    })
    # 这里可以添加对消息的处理逻辑


@socketio.on('transfer')
def handle_transfer(msg):
    def emit_progress(now,total):
        # print('emit-progress')
        socketio.emit('progress',{
            'now':now,
            'total':total
        })
        socketio.sleep(0)
    in_time = msg['in']
    out_time = msg['out']
    content_video=msg['content_video']
    style_paths=msg['style_paths']
    weights = msg['weights']
    alpha=msg['alpha']
    do_interpolation = False
    if len(style_paths) > 1:
        do_interpolation = True
    result = useModel.processVideo({
        'content_video':content_video,
        'style_paths':style_paths,
        'weights':weights,
        'alpha':alpha,
        'do_interpolation':do_interpolation,
        'time':{
            'in':in_time,
            'out':out_time
        }
    },emit_progress)
    print(result)
    emit('transfer-video-over',{
        'filePath':result
    })
  
@socketio.on('video_frame')
def on_video_frame(data):
    # def process_data(data):
    # 这里是处理数据的逻辑
    newData = useModel.processData(data, {})
    # 通过 SocketIO 发送处理后的数据
    socketio.sleep(0)
    socketio.emit('processed_frame', newData)
    print('发送')

    # 使用 start_background_task 在后台处理数据
    # socketio.start_background_task(target=process_data, data=data)


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')



if __name__ == '__main__':
    _path = textStyleModel.text_trans({})
    print(_path)
    # 通过添加allow_unsafe_werkzeug=True参数，你可以在生产环境中运行你的Flask-SocketIO应用。
    socketio.run(app, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)
