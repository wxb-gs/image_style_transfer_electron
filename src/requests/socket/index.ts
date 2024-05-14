import io from "socket.io-client";
import { SOKET_URL } from "@/constants";

const socket = io(SOKET_URL, {
  autoConnect: false,
});

socket.on("connect", () => {
  console.log("Connected to server");
});

// 监听服务器发送的消息
socket.on("message", (msg) => {
  console.log("Received message:", msg);
});

const connect = () => {
  socket.connect();
};
const disconnect = () => {
  socket.disconnect();
};

const sendMessage = (msg: Message) => {
  socket.emit("message", msg);
};
const sendTransfer = (msg: any) => {
  socket.emit("transfer", msg);
};

const sendTextMessage = (msg: any) => {
  socket.emit("text-transfer", msg);
};

export {
  socket,
  connect,
  disconnect,
  sendTextMessage,
  sendMessage,
  sendTransfer,
};
