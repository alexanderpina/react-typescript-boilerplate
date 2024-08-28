export interface AuthState {
  isAuthenticated: boolean
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState['isAuthenticated']) => void
}
