import request from '../'

export const login = () => {
  return request.post<string>('/users/login')
}
