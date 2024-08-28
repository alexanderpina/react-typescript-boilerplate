import { Button } from '@/components/Button'
import { useAuthStore } from '@/store/auth/useAuthStore'

export const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore((state) => state)

  return (
    <nav>
      {isAuthenticated && (
        <Button
          text="Logout"
          onClick={() => {
            setIsAuthenticated(false)
          }}
        />
      )}
    </nav>
  )
}
