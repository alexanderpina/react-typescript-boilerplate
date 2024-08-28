import { getItem, setItem } from 'utils/localStorage'
import { create } from 'zustand'
import { logger } from '../logger/logger'
import { type GlobalState, type GlobalStore } from './types'

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  isMenuOpen: getItem('isMenuOpen') ?? false
}

export const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      toggleMenu: () => {
        set((state) => {
          setItem('isMenuOpen', !state.isMenuOpen)
          return { isMenuOpen: !state.isMenuOpen }
        })
      }
    }),
    'globalStore'
  )
)
