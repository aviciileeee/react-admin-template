import request from '../'
import { User, Login } from '@/types/api'

export const login = (data: Login.params) => {
  return request.post<string>('/users/login', data, {
    handleError: true,
    handleLoading: true
  })
}

export const getUserInfo = () => {
  return request.get<User.UserItem>('/users/getUserInfo')
}
