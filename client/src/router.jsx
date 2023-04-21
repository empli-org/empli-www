// @ts-nocheck
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import {
  Landing,
  TalentDetail,
  OfferDetail,
  Companies,
  News,
  About,
  Contact,
  // Login,
  // Register,
  Talents,
  Error404,
  Offers,
} from 'pages'
import UserProfileForm from './pages/UserForm'
import PricingPage from './pages/Info/Pricing'
import Media from './pages/Community/Media'
import HomeEmpresa from './pages/HomeEmpresa'

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
        path: '/info/empresas',
        element: <HomeEmpresa />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
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
        path: '/user/profile',
        element: <UserProfileForm />,
      },
      { path: '/media', element: <Media /> },
    ],
  },
])
