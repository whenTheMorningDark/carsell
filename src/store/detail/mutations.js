import { getDetail, setLocalDetail } from './mutations-type';
import Vue from 'vue';
// console.log(getDetail);
const mutations = {
  [getDetail](state, detail) {
    // console.log("asddsada");
    state.detail = detail;
  },
  [setLocalDetail](state, detail) {
    localStorage.setItem('localDetail', detail);
    Vue.set(state.detail, 'HomeBanner', detail.HomeBanner);
    Vue.set(state.detail, 'detaildescData', detail.detaildescData);
    Vue.set(state.detail, 'carRate', detail.carRate);
    Vue.set(state.detail, 'carMessage', detail.carMessage);
    let filterData = state.localDetail.filter((v) => {
      return v.id === detail.id
    })
    if (filterData.length > 0) { // 说明已经存在
      return;
    }
    state.localDetail.push(detail); // 缓存到本地的数组

  }
}
export default mutations;