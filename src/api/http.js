import axios from "axios";

const instance = axios.create({timeout: 1000 * 12});
//请求拦截
instance.interceptors.request.use(config=>{
    // console.log(this);
    // this.$loading.show("loading")
    // console.log(this.$loading);
    console.log("请求中....");
    return config;
},error=>{
    return Promise.reject(error);
})
//响应拦截
instance.interceptors.response.use(response=>{
    console.log("请求成功...")
    // this.$loading.hide()
    return response;
},error=>{
    return Promise.reject(error);
})


export default instance;