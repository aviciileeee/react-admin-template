import request from '../'

export const login = () => {
  return request.post<string>('/users/login1', undefined, {
    handleError: true,
    handleLoading: true
  })
}
