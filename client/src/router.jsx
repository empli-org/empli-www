import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'

import {
  Landing,
  TalentDetail,
  Ofertas,
  Empresas,
  Noticias,
  Acerca,
  Contacto,
  Login,
  Register,
  Talents,
  Error404,
  DetalleOferta,
} from 'pages'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Landing />,
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
