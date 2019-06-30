import Notification from './notification.js';
let messageInstance;
function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance(); // 确保一定能获取到alert实例
  return messageInstance;
}
function notice({ duration = 1.5, content = '', type = 'default' }) {
  let instance = getMessageInstance();
  // console.log(instance);
  instance.add({
    content: content,
    duration: duration,
    type: type
  });
}

// export default {
//   info(options) {
//     return notice(options);
//   }
// }
export default notice;