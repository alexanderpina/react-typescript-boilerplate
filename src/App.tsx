import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/Header'
import { Router } from './routes'
import 'react-toastify/dist/ReactToastify.css'

const cacheTime = 30 * 1000
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime,
      retry: 2,
      retryDelay: 2000,
      refetchOnWindowFocus: false
    }
  }
})
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div id="root">
        <Header />
        <Router />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  )
}
