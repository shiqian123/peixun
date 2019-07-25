import axios from "axios";
import { Loading } from "element-ui";
import { Message } from 'element-ui';
// import qs from "qs"

let config = {
  baseURL: process.env.VUE_APP_BASE_URL, //请求后端地址设置
  timeout: 300 * 1000 // 超时时间设置
  // withCredentials: true// 是否跨域
};
console.log(config)
const service = axios.create(config);
let loadService: any = "";
let num: number = 0;
service.interceptors.request.use(
  request => {
    if (window.localStorage["token"]) {
          // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
          request.headers.Authorization = window.localStorage["token"];
          request.headers.Token = window.localStorage["token"];
      }
    num++;
    if(request.url.indexOf('onchangeIncTaxPremium')<0&&
      request.url.indexOf('queryCircflag')<0&&
      request.url.indexOf('GgCountry')<0
      &&request.url.indexOf('caucalateItemKindPremium')<0){
      loadService = Loading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    }
      if(request.data&&request.url.indexOf('DataSynchronism')<0){
        request.data.t = Date.parse(new Date())/1000
      }
      if(request.params){
        request.params.t = Date.parse(new Date())/1000
      }
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  response => {
    num--;
    if (num == 0) {
      // setTimeout(()=>{
        loadService.close();
      // },100)
    }
    if (response.data.operationState == "FAIL") {
      if(JSON.stringify(response.data.data)!='{}'){
        return response.data;
      }
     
      Message.error({
        dangerouslyUseHTMLString: true,
        message: response.data.errors[0]
      })
      throw new Error();
    } else if (response.data.operationState == "EXCEPTION") {
    
      Message.error(response.data.errors[0]);
      if(response.data.errors[0]=="Token异常或者失效,请重新登录"){
        setTimeout(() =>{
          window.location.href="/";
          },1000);
      }
      throw new Error();
    } else {
      return response.data.data;
    }
  },
  err => {
    num--;
    if (num == 0) {
      loadService.close();
    }
    return Promise.reject(err);
  }
);

export default service;
