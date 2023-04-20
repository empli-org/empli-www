// @ts-nocheck
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
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
import UserProfileForm from './pages/UserForm'
import PricingPage from './pages/Info/Pricing'
import Media from './pages/Community/Media'
import { AuthLayout } from './pages/Auth/Layout'
import { Onboarding } from './pages/Account/Onboarding'
import { Payment } from './pages/Account/Payment'
import { DashboardLayout } from './pages/Dashboard/Layout'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { CompanyDash } from './pages/Dashboard/Company/CompanyDash'
import { ProfessionalDash } from './pages/Dashboard/Professional/ProfessionalDash'

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
        path: '/ews',
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
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/account',
    element: <Outlet />,
    children: [
      {
        path: '/account/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/account/payment',
        element: <Payment />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/company',
        element: <CompanyDash />,
      },
      {
        path: '/dashboard/professional',
        element: <ProfessionalDash />,
      },
    ],
  },
])
