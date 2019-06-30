import Alert from './alert.vue';
import Vue from 'vue';
Alert.newInstance = properties => {
  const props = properties || {};
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props: props
      })
    }
  })
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const alert = Instance.$children[0]; // 找到alert实例目的是需要alert实例本身的add方法
  // console.log(alert);
  return {
    add(noticeProps) {
      alert.add(noticeProps);
    },
    remove(name) {
      alert.remove(name);
    }
  }
}
export default Alert;