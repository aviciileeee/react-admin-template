import Request from './request'
import { BASE_URL, TIME_OUT } from './config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
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
