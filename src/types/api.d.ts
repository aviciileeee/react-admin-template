export namespace Login {
  export interface params {
    username: string
    password: string
  }
}

export interface PageParams {
  pageNumber: number
  pageSize: number
}

export namespace User {
  export interface params extends PageParams {
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
