import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/Landing'
import Ofertas from './pages/Ofertas'
import Empresas from './pages/Empresas'
import Noticias from './pages/Noticias'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import DetalleOferta from './pages/DetalleOferta'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/offers',
        element: <Ofertas />,
      },
      {
        path: '/offers/:code',
        element: <DetalleOferta />,
      },
      {
        path: '/companies',
        element: <Empresas />,
      },
      {
        path: '/news',
        element: <Noticias />,
      },
      {
        path: '/about',
        element: <Acerca />,
      },
      {
        path: '/contact',
        element: <Contacto />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])
