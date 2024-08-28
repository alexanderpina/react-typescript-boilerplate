export interface GlobalState {
  isMenuOpen: boolean
}

export interface GlobalStore extends GlobalState {
  toggleMenu: () => void
}
