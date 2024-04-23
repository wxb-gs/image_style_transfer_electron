from flask import Flask
from flask_socketio import SocketIO,send
from flask_cors import CORS
from model import Model

#上来就加载模型
useModel = Model()
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
    useModel.process({
         'content_paths':['./input/content/chicago.jpg'],
         'style_paths':['./input/styles/antimonocromatismo.jpg','./input/styles/contrast_of_forms.jpg']
    })
    print('Received message: ' + str(msg))
    # send('message',json=True)
    # 这里可以添加对消息的处理逻辑


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')





if __name__ == '__main__':
    # 通过添加allow_unsafe_werkzeug=True参数，你可以在生产环境中运行你的Flask-SocketIO应用。
    socketio.run(app, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)
