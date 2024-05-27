import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface Interceptor {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (resp: AxiosResponse) => AxiosResponse
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseFailureFn?: (err: any) => any
}

export interface AdminRequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptor
}

export interface ResponseType<T> {
  code: number
  data: T
  msg: string
}
