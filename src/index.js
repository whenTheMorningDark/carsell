import KaIcon from 'components/myIcon/index.js';
const components = [
  KaIcon
]
const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
export default {
  install,
  KaIcon
}