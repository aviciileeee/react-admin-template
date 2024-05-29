import axios from 'axios'
import type { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import storage from '@/utils/storage'
import { showLoading, hideLoading } from '@/utils/loading'

export default class Request {
  private instance: AxiosInstance
  constructor(private config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 全局拦截器
    this.instance.interceptors.request.use(
      config => {
        if (!config.handleLoading) {
          showLoading()
        }
        const token = storage.get('token')
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      err => {
        console.log('request error: ', err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      res => {
        if (!res.config.handleLoading) {
          hideLoading()
        }
        return res.data.data
      },
      (err: AxiosError) => {
        if (err.config?.handleError) {
          return Promise.reject({
            code: err.code,
            message: err.message,
            name: err.name
          })
        }
        console.log('response error: ', err)
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
    return this.instance.request<null, T>(config)
  }

  get<T, P = unknown>(
    url: string,
    params?: P,
    config: AxiosRequestConfig = {
      handleLoading: false,
      handleError: false
    }
  ) {
    return this.request<T>({
      url,
      params,
      method: 'GET',
      ...config
    })
  }

  post<T, D = unknown>(
    url: string,
    data?: D,
    config: AxiosRequestConfig = {
      handleLoading: false,
      handleError: false
    }
  ) {
    return this.request<T>({
      url,
      data,
      method: 'POST',
      ...config
    })
  }
}
