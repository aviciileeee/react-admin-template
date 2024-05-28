import { create } from 'zustand'
import { User } from '@/types/api'

export const useUserStore = create<{
  token: string
  userInfo: User.UserItem
  updateUserInfo: (userInfo: User.UserItem) => void
  updateToken: (token: string) => void
}>(set => ({
  token: '',
  userInfo: {
    username: '',
    userId: ''
  },
  updateUserInfo: (userInfo: User.UserItem) => {
    set({
      userInfo
    })
  },
  updateToken: (token: string) => {
    set({
      token: token
    })
  }
}))
