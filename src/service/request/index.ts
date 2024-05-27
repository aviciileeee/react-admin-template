import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { AdminRequestConfig, ResponseType } from './type'
import storage from '@/utils/storage'

export default class Request {
  private instance: AxiosInstance
  constructor(private config: AdminRequestConfig) {
    this.instance = axios.create(config)
    // 全局拦截器
    this.instance.interceptors.request.use(
      config => {
        const token = storage.get('token')
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      err => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
    // 实例拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        this.config.interceptors?.requestSuccessFn,
        this.config.interceptors?.requestFailureFn
      )
      this.instance.interceptors.response.use(
        this.config.interceptors?.responseSuccessFn,
        this.config.interceptors?.responseFailureFn
      )
    }
  }

  request<T = unknown>(config: AxiosRequestConfig) {
    return this.instance.request<null, ResponseType<T>>(config)
  }

  get<T, P = unknown>(url: string, params?: P) {
    return this.request<T>({
      url,
      params,
      method: 'GET'
    })
  }

  post<T, D = unknown>(url: string, data?: D) {
    return this.request<T>({
      url,
      data,
      method: 'POST'
    })
  }
}
