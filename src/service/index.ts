import Request from './request'
import { BASE_URL, TIME_OUT } from './config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  // interceptors: {
  //   requestSuccessFn: config => {
  //     console.log('实例请求成功拦截')
  //     return config
  //   },
  //   requestFailureFn: err => {
  //     console.log('实例请求失败拦截')
  //     return err
  //   },
  //   responseSuccessFn(resp) {
  //     console.log('实例响应成功拦截')
  //     return resp
  //   }
  // }
})

// another instance
// const request2 = new Request({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT,
//   interceptors: {
//     fn1: function () {},
//     fn2: function () {},
//     fn3: function () {},
//     fn4: function () {}
//   }
// })
export default request
