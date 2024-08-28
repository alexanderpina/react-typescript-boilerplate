import { z } from 'zod'

export const LoginSchema = z.object({
  username: z.string({ message: 'Username is required' }).min(4, { message: 'Username is required' }),
  password: z.string({ message: 'Password is required' }).min(4, { message: 'Password is required' })
})
