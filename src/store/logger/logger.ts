import { type Logger, type LoggerImpl } from './types'

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  const loggedSet: typeof set = (...a) => {
    set(...a)
    if (import.meta.env.DEV) {
      console.log(...(name ? [`${name}:`] : []), get())
    }
  }
  store.setState = loggedSet

  return f(loggedSet, get, store)
}

export const logger = loggerImpl as Logger
