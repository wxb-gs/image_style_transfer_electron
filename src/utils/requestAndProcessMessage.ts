export default function requestAndProcessMessage(
  send_requst: string,
  on_message: string,
  send_key?: any,
  dosomting?: (result: any) => any
) {
  if (send_key) window.ipcRenderer.send(send_requst, send_key);
  else window.ipcRenderer.send(send_requst);
  window.ipcRenderer.on(on_message, (_event, results) => {
    if (dosomting) dosomting(results);
  });
}
