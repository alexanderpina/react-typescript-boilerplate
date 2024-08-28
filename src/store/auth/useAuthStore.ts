import { create } from 'zustand'
import { logger } from '../logger/logger'
import { type AuthState, type AuthStore } from './types'

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false
}

export const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }))
      }
    }),
    'authStore'
  )
)
