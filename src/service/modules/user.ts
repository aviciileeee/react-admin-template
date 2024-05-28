import request from '../'

export const login = () => {
  return request.post<string>('/users/login', undefined, {
    handleError: true,
    handleLoading: true
  })
}
