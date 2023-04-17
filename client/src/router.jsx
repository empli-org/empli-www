import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/Landing'
import Ofertas from './pages/Info/Ofertas'
import Empresas from './pages/Community/Empresas'
import Noticias from './pages/Info/Noticias'
import Acerca from './pages/Info/Acerca'
import Contacto from './pages/Info/Contacto'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Layout from './components/Layout'
import Error404 from './pages/404'
import DetalleOferta from './pages/DetalleOferta'
import Talents from './pages/Community/Talents/Talents'
import TalentDetail from './pages/Community/Talents/TalentDetail'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
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
        path: '/talents',
        element: <Talents />,
      },
      {
        path: '/talents/:id',
        element: <TalentDetail />,
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
