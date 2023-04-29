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
import PricingPage from './pages/Info/pricing/Pricing'
import Media from './pages/Community/Media'
import HomeEmpresa from './pages/HomeEmpresa'
import { AuthLayout } from './pages/Auth/Layout'
import { Onboarding } from './pages/Account/Onboarding'
import { Payment } from './pages/Account/Payment'
import { DashboardLayout } from './pages/Dashboard/Layout'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { CompanyDash } from './pages/Dashboard/Company/CompanyDash'
import { ProfessionalDash } from './pages/Dashboard/Professional/ProfessionalDash'
import DashProfessionalOffers from './pages/Dashboard/Professional/Offers'
import { MarketProfessionals } from './pages/Dashboard/Company/MarketProfessionals'
import InfoProfessionals from './pages/Info/InfoProfessionals'
import UserProfile from './pages/UserForm'

// import { Admin } from './pages/Dashboard/Administrator/Admin'

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
        path: '/info/professionals',
        element: <InfoProfessionals />,
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
        path: '/dashboard/company/talents',
        element: <MarketProfessionals />,
      },
      {
        path: '/dashboard/company/offers',
        element: <h1>Ofertas publicadas</h1>,
      },
      {
        path: '/dashboard/company/featured',
        element: <h1>Perfiles destacados / recomendados</h1>,
      },
      {
        path: '/dashboard/company/settings',
        element: <h1>Configuración de empresa</h1>,
      },
      {
        path: '/dashboard/professional',
        element: <ProfessionalDash />,
      },
      {
        path: '/dashboard/professional/offers',
        element: <DashProfessionalOffers />,
      },
      {
        path: '/dashboard/professional/saved',
        element: <h1 className="text-xl font-bold">Listado de Favoritos</h1>,
      },
      {
        path: '/dashboard/professional/profile',
        element: <UserProfile />,
      },
      // {
      //   path: '/dashboard/admin',
      //   element: <Admin />,
      // },
    ],
  },
])
