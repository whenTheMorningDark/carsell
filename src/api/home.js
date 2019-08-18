import axios from './http';
// import axios from 'axios';
import { HOST } from 'common/js/config'
export function getHomeBanner() {
  const url = HOST + '/banner'
  return axios.get(url);
}
export function getHomeNav() {
  const url = HOST + '/nav'
  return axios.get(url);
}
export function getHomeRecommend() {
  const url = HOST + '/recommendcar'
  return axios.get(url);
}
