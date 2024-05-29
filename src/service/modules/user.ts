import request from '../'
import { User, Login } from '@/types/api'
import { ResultData } from '../request/type'

export const login = (data: Login.params) => {
  return request.post<string>('/users/login', data, {
    handleError: true,
    handleLoading: true
  })
}

export const getUserInfo = () => {
  return request.get<User.UserItem>('/users/getUserInfo')
}

export const getUserList = () => {
  return request.get<ResultData<User.UserItem>>('/users/list?pageNumber=1&pageSize=10')
}
