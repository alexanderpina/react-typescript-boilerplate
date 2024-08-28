import { type LoginBody } from '@/types/auth'

export const loginApi = async (body: LoginBody) => {
  const res = new Promise<boolean>((resolve, reject) => {
    if (body.username !== 'user' || body.password !== 'user') {
      reject(new Error('Invalid username or password'))
    }

    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
  return await res
}
