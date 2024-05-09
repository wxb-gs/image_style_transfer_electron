import { contextBridge, ipcRenderer } from "electron";
// contextBridge.exposeInMainWorld("fileApi", {
//   readLocalImage: async (imagePath: string) => {
//     const imageBuffer = await ipcRenderer.invoke("read-local-image", imagePath);
//     // 将Buffer转换为图片URL
//     const imageUrl = URL.createObjectURL(new Blob([imageBuffer]));
//     return imageUrl;
//   },
// });
// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  removeAllListeners(
    ...args: Parameters<typeof ipcRenderer.removeAllListeners>
  ) {
    const [channel] = args;
    return ipcRenderer.removeAllListeners(channel);
  },
  // You can expose other APTs you need here.
  // ...
});
