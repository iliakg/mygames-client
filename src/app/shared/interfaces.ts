export interface ResponseError {
  code: number
  item: string
  msg: string
  status: string
}

export interface User {
  id: number
  email: string
  username?: string
  password?: string
  token?: string
}
