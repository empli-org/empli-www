import { VerifiedIcon } from '@/components/icons/VerifiedIcon'
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react'
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { useAccountContext } from '../Account/AccountContext'
import { EmpliLogo } from '@/components'

const professionalItems = [
  { name: 'Inicio', icon: <RectangleGroupIcon />, to: 'professional' },
  { name: 'Ofertas', icon: <DocumentIcon />, to: 'professional/offers' },
  { name: 'Guardado', icon: <BookmarkIcon />, to: 'professional/saved' },
  { name: 'Perfil', icon: <UserCircleIcon />, to: 'professional/profile' },
]

const companyItems = [
  { name: 'Inicio', icon: '', to: 'company' },
  { name: 'Perfiles', icon: '', to: 'company/talents' },
  { name: 'Mis Ofertas', icon: '', to: 'company/offers' },
  { name: 'Favoritos', icon: '', to: 'company/favorites' },
]

const adminItems = [
  { name: 'Inicio', icon: '', to: 'admin' },
  { name: 'Media', icon: '', to: 'admin/media' },
  { name: 'Cuentas', icon: '', to: 'admin/accounts' },
]

export const DashboardLayout = () => {
  const { pathname } = useLocation()
  const { signOut } = useClerk()
  const navigate = useNavigate()
  const isCompany = pathname.split('/').includes('company')
  const isAdmin = pathname.split('/').includes('admin')
  const itemsSide = [
    isCompany ? companyItems : isAdmin ? adminItems : professionalItems,
  ]
  const { account } = useAccountContext()

  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen w-full bg-gray-50 font-sans text-gray-900">
          <aside className="fixed h-screen w-64 border-r border-gray-200 px-10 py-6">
            <Link to="/">
              <div className="w-24 text-blue-whale/50">
                <EmpliLogo />
              </div>
            </Link>
            <div className="flex h-full flex-col justify-between py-20">
              {itemsSide.map((group, idx) => (
                <ul key={idx} className="flex flex-col gap-y-6">
                  {group.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.to}
                        className="group flex items-center gap-x-4 py-2 text-gray-600 hover:text-gulf-stream"
                      >
                        <span className="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-gulf-stream transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100" />
                        {item?.icon && item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
              <ul>
                <li>
                  <button className="group flex items-center gap-x-4 py-2 text-gray-600 hover:text-gulf-stream">
                    <span className="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-gulf-stream transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100" />
                    <QuestionMarkCircleIcon />
                    <span>Ayuda</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      signOut()
                      navigate('/auth/login')
                    }}
                    className="group flex items-center gap-x-4 py-2 text-gray-600 hover:text-gulf-stream"
                  >
                    <span className="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-gulf-stream transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100" />
                    <PowerIcon />
                    <span>Cerrar Sessión</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          <div className="ml-64 flex-1 pb-8">
            {isCompany ? (
              <CompanyHeader
                name={account.name}
                verified={account.plan !== 'Free'}
              />
            ) : (
              <ProfessionalHeader
                name={account.name}
                verified={account.verified}
              />
            )}
            <Outlet />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Navigate to="/auth/login" />
      </SignedOut>
    </>
  )
}

function ProfessionalHeader({ name, verified }) {
  return (
    <div className="flex items-center justify-between border-b px-10 py-7">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold leading-relaxed text-gray-800">
          <span>{name}</span>
          <VerifiedIcon verified={verified} />
        </h1>
        <p className="text-sm font-medium text-gray-500">
          Encuentra la oferta de trabajo ideal para tu perfil
        </p>
      </div>
      <Link
        to="professional/profile"
        className="inline-flex items-center gap-x-2 rounded-md bg-blue-whale px-6 py-2.5 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-whale focus:ring-offset-1"
      >
        <UserCircleIcon />
        <span className="text-sm font-semibold tracking-wide">Mi perfil</span>
      </Link>
    </div>
  )
}

function CompanyHeader({ name, verified }) {
  return (
    <div className="flex items-center justify-between border-b px-10 py-7">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold leading-relaxed text-gray-800">
          <span>{name}</span>
          <VerifiedIcon verified={verified} />
        </h1>
        <p className="text-sm font-medium text-gray-500">
          Te ayudamos a encontrar los mejores profesionales para tu empresa
        </p>
      </div>
      <Link
        to="company/offers/create"
        className="inline-flex items-center gap-x-2 rounded-md bg-blue-whale px-6 py-2.5 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-whale focus:ring-offset-1"
      >
        <DocumentIcon />
        <span className="text-sm font-semibold tracking-wide">
          Publicar Oferta
        </span>
      </Link>
    </div>
  )
}

function RectangleGroupIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
      />
    </svg>
  )
}

function QuestionMarkCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
      />
    </svg>
  )
}

function PowerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
      />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  )
}

function BookmarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  )
}

function UserCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}
