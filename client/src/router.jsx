// @ts-nocheck
import { Link, Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
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
  Error404,
  PricingPage,
  Media,
  HomeEmpresa,
  AuthLayout,
  Onboarding,
  FeedBackPayment,
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
} from 'pages'
import NewsDetailPage from './pages/Info/NewsDetail'
import AdminMediaPage from './pages/Dashboard/Admin/Media/AdminMedia'
import CreateMediaPage from './pages/Dashboard/Admin/Media/Create'
import Credits from './components/Credits/Credits'
import Protected from './pages/Dashboard/Protected'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'payments/plan/feedback',
        element: (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="rounded-xl bg-hint-of-red p-8 shadow">
              <h1 className="text-xl font-bold">
                Gracias por actualizar tu sub
              </h1>
              <p className="text-lg text-slate-600">
                Disfruta de características y beneficios que tenemos para tí
              </p>
            </div>
            <Link
              className="mt-8 rounded-lg bg-blue-whale px-6 py-4 font-medium text-white"
              to="/dashboard"
            >
              Volver a cuenta
            </Link>
          </div>
        ),
      },
      {
        path: 'info/empresas',
        element: <HomeEmpresa />,
      },
      {
        path: 'info/professionals',
        element: <InfoProfessionals />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'offers/:code',
        element: <OfferDetail />,
      },
      {
        path: 'talents/:id',
        element: <TalentDetail />,
      },
      {
        path: 'companies',
        element: <Companies />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news/:id',
        element: <NewsDetailPage />,
      },
      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'contact',
        element: <Contact />,
      },
      { path: 'media', element: <Media /> },
      {
        path: 'credits',
        element: <Credits />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/account',
    element: <Outlet />,
    children: [
      {
        path: 'onboarding',
        element: <Onboarding />,
      },
      {
        path: 'payment',
        element: <FeedBackPayment />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <>
        <SignedIn>
          <DashboardLayout />
        </SignedIn>
        <SignedOut>
          <Navigate to="/auth/login" />
        </SignedOut>
      </>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'company',
        element: (
          <Protected accountType="company">
            <Outlet />
          </Protected>
        ),
        children: [
          { index: true, element: <CompanyDash /> },
          {
            path: 'talents',
            element: <MarketProfessionals />,
          },
          {
            path: 'offers',
            element: <CompanyOffers />,
          },
          {
            path: 'favorites',
            element: <FavedTalents />,
          },
          {
            path: 'offers/create',
            element: <CreateOffer />,
          },
        ],
      },
      {
        path: 'professional',
        element: (
          <Protected accountType="professional">
            <Outlet />
          </Protected>
        ),
        children: [
          { index: true, element: <ProfessionalDash /> },
          {
            path: 'offers',
            element: <DashProfessionalOffers />,
          },
          {
            path: 'saved',
            element: <SavedProfessionalOffers />,
          },
          {
            path: 'profile',
            element: <DashUserProfile />,
          },
        ],
      },
      {
        path: 'admin',
        element: (
          <Protected accountType="admin">
            <Outlet />
          </Protected>
        ),
        children: [
          { index: true, element: <AdminDash /> },
          {
            path: 'media',
            element: <AdminMediaPage />,
          },
          {
            path: 'media/create',
            element: <CreateMediaPage />,
          },
        ],
      },
    ],
  },
])
