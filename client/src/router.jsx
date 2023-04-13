import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/Landing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
])
