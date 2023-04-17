import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'

import {
  Landing,
  TalentDetail,
  OfferDetail,
  Companies,
  News,
  About,
  Contact,
  Login,
  Register,
  Talents,
  Error404,
  Offers,
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
        element: <Offers />,
      },
      {
        path: '/offers/:code',
        element: <OfferDetail />,
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
        element: <Companies />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
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
