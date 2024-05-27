// 拓展axios
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    handleLoading: boolean
    handleError: boolean
  }
}
