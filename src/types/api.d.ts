export namespace Login {
  export interface params {
    username: string
    password: string
  }
}

export namespace User {
  export interface params {
    id?: number
    userName?: string
    state?: number
  }
  export interface UserItem {
    userName: string
    id: string
    email: string
    role: string
    state: number
    registerTime: string
  }
}
