import { T } from 'i18n/translator'
import { Login } from '@/pages/Login'

export const Home = () => {
  return (
    <div>
      <T path="home.message" />
      <Login />
    </div>
  )
}
