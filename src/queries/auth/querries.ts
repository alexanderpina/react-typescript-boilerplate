import { useMutation } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { type LoginBody } from '@/types/auth'

// import { type LoginBody } from '@/types/auth';
import { loginApi } from '@/domain/auth'

export const useLoginQuery = () => {
  const {
    mutateAsync: loginAsync,
    isLoading: isLoadingLogin,
    isError: isErrorLogin,
    error: errorLogin
  } = useMutation<boolean, AxiosError, LoginBody>(['login'], loginApi)

  return {
    loginAsync,
    isLoadingLogin,
    isErrorLogin,
    errorLogin
  }
}
