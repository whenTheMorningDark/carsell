const state = {
  detail: {},
  localDetail: JSON.parse(localStorage.getItem('localDetail')) || []
}
export default state;