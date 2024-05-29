// 拓展axios
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import type { Interceptor } from '@/service/request/type'

declare module 'axios' {
  interface AxiosRequestConfig {
    handleLoading?: boolean
    handleError?: boolean
    interceptors?: Interceptor
  }
}
