// @ts-nocheck
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { Layout } from 'components'
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
  PricingPage,
  Media,
  HomeEmpresa,
  AuthLayout,
  Onboarding,
  Payment,
  DashboardLayout,
  Dashboard,
  CompanyDash,
  ProfessionalDash,
  MarketProfessionals,
  InfoProfessionals,
  UserProfile,
  AdminDash,
} from 'pages'
import DashProfessionalOffers from './pages/Dashboard/Professional/Offers'
import FormOffer from './components/Forms/FormOffer'
import { SavedOffers } from './pages/Dashboard/Professional/Saved'

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
      { path: '/formoffer', element: <FormOffer /> },
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
        element: <SavedOffers />,
      },
      {
        path: '/dashboard/professional/profile',
        element: <UserProfile />,
      },
      {
        path: '/dashboard/admin',
        element: <AdminDash />,
      },
      {
        path: '/dashboard/admin/media',
        element: <h1>Acá van noticias y multimedia</h1>,
      },
      {
        path: '/dashboard/admin/accounts',
        element: <h1>Acá va el manejo de cuentas de usuarios</h1>,
      },
    ],
  },
])
