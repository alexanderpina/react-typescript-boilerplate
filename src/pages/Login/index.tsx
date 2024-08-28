import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useAuthStore } from '@/store/auth/useAuthStore'
import { type LoginBody } from '@/types/auth'
import { LoginSchema } from './validation'

import { useLoginQuery } from '@/queries/auth/querries'

export const Login = () => {
  const { setIsAuthenticated } = useAuthStore((state) => state)
  const { isLoadingLogin: isLoading, loginAsync, isErrorLogin: isError, errorLogin: error } = useLoginQuery()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginBody>({ resolver: zodResolver(LoginSchema) })

  useEffect(() => {
    if (isError) {
      console.log({ error, isError })
      toast.error(error?.message ?? 'Erro no login', { theme: 'colored' })
    }
  }, [isError])

  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    await loginAsync(data)
    setIsAuthenticated(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Username: user</p>
      <p>Password: user</p>
      <Input
        errors={errors}
        placeholder="Username"
        label="Username"
        id="username"
        register={register}
        name="username"
      />
      <Input
        errors={errors}
        placeholder="Password"
        label="Password"
        type="password"
        register={register}
        name="password"
      />
      <Button text="Login" type="submit" isLoading={isLoading} />
    </form>
  )
}
