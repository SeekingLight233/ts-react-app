import Axios from "axios"
import { message } from "antd"

const axios = Axios.create({ timeout: 20000 })

//对相应的数据进行拦截
axios.interceptors.response.use(
  (response) => {
    if (response.data && response.data.flag === 1) {
      //后端flag字段为1代表请求失败
      let errorMsg = response.data.msg
      message.error(errorMsg) //弹出警告
      return Promise.reject(errorMsg)
    }
    return response.data
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)
//对get请求进行封装
export function get(url: string, params: any) {
  return axios.get(url, {
    params,
  })
}
//ps  这里没有用自带的axios.post  因为默认的axios会将post请求JSON化
export function post(url: string, params: any) {
  return axios({
    method: "post",
    url: url,
    data: params,
  })
}
