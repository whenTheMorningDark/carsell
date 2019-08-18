import * as types from './mutations-type';
const mutations = {
  [types.SET_SCROLL_TOP](state, scrollTop) {
    state.scrollTop = scrollTop
  }
}
export default mutations;