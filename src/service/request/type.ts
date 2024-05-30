import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface Interceptor {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (resp: AxiosResponse) => AxiosResponse
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseFailureFn?: (err: any) => any
}

export interface ResponseType<T> {
  code: number
  data: T
  msg: string
}

export interface ResultData<T> {
  list: T[]
  pageNum: number
  pageSize: number
  total: number
}
