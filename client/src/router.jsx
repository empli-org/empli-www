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
  AdminDash,
  DashUserProfile,
  CompanyOffers,
  CreateOffer,
  SavedProfessionalOffers,
  DashProfessionalOffers,
  FavedTalents,
  // FormOffer,
} from 'pages'
import FormOffer from './components/Forms/FormOffer'
// import { AdminDash } from './pages/Dashboard/Admin/AdminDash'
// import { SavedOffers } from './pages/Dashboard/Professional/Saved'
// import CompanyOffers from './pages/Dashboard/Company/CompanyOffers'
// import FavedTalents from './pages/Dashboard/Company/Favorites'
// import CreateOffer from './pages/Dashboard/Company/CreateOffer'
import NewsDetailPage from './pages/Info/NewsDetail'
// import UserProfile from './pages/Dashboard/Professional/Profile'

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
        path: '/news/:id',
        element: <NewsDetailPage />,
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
        element: <CompanyOffers />,
      },
      {
        path: '/dashboard/company/favorites',
        element: <FavedTalents />,
      },
      {
        path: '/dashboard/company/offers/create',
        element: <CreateOffer />,
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
        element: <SavedProfessionalOffers />,
      },
      {
        path: '/dashboard/professional/profile',
        element: <DashUserProfile />,
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
