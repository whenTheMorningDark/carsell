import axios from './http';
// import axios from 'axios';
import { HOST } from 'common/js/config'
export function getDetail(id) {
  // console.log(id);
  const url = HOST + `/api/detail/${id}`
  return axios.get(url);
}

