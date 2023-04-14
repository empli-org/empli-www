import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/Landing'
import Login from './components/Login/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])
