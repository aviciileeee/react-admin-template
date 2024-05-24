import axios from 'axios'
import { message } from 'antd'
import { hideLoading, showLoading } from './loading'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class Request {
  instance: AxiosInstance

  constructor(
    private config: AxiosRequestConfig = {
      baseURL: import.meta.env.VITE_BASE_API,
      timeout: 8000,
      timeoutErrorMessage: '请求超时,请稍后再试'
    }
  ) {
    this.instance = axios.create(this.config)

    this.instance.interceptors.request.use(config => {
      showLoading()
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      if (import.meta.env.VITE_MOCK === 'true') {
        config.baseURL = import.meta.env.VITE_MOCK_API
      } else {
        config.baseURL = import.meta.env.VITE_BASE_API
      }
      return {
        ...config
      }
    })

    this.instance.interceptors.response.use(
      response => {
        const data = response.data
        hideLoading()
        if (data.code === 500001) {
          message.error(data.msg)
          localStorage.removeItem('token')
          location.href = '/login'
        } else if (data.code != 0) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        return data.data
      },
      error => {
        hideLoading()
        message.error(error.msg)
        return Promise.reject(error.message)
      }
    )
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export default new Request()
