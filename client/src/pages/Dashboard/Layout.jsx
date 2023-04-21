import EmpliLogo from '@/components/ui/brand/EmpliLogo'
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'

export const DashboardLayout = () => {
  const { signOut } = useClerk()
  const location = useLocation()
  const pathname = location.pathname
  const isCompany = pathname.split('/').includes('company')
  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen flex-col">
          <div className="w-full bg-hint-of-red px-4 py-6">
            <Link to="/dashboard" className="h-24 w-24">
              <div className="w-24 text-blue-whale">
                <EmpliLogo />
              </div>
            </Link>
          </div>
          <div className="flex h-full flex-1">
            <div className="flex w-[22rem] flex-col bg-[#f7f7f7] px-4 py-12">
              <ul className="flex flex-1 flex-col gap-4">
                {isCompany ? <CompanyAside /> : <ProfessionalAside />}
                <li className="mt-auto">
                  <button onClick={() => signOut()}>Cerrar Sesión</button>
                </li>
              </ul>
            </div>
            <div className="w-full flex-1 bg-white px-8 py-12">
              <Outlet />
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Navigate to="/auth/login" />
      </SignedOut>
    </>
  )
}

function ProfessionalAside() {
  return (
    <>
      <li className="text-lg font-medium">
        <Link to="/dashboard/professional">Inicio</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/professional/offers">Ofertas</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/professional/favorites">Favoritos</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/professional/preferences">Preferencias</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/professional/profile">Perfil</Link>
      </li>
    </>
  )
}

function CompanyAside() {
  return (
    <>
      <li className="text-lg font-medium">
        <Link to="/dashboard/company">Inicio</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/company/talents">Profesionales</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/company/offers">Ofertas</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/company/featured">Perfiles destacados</Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/dashboard/company/settings">Configuración</Link>
      </li>
    </>
  )
}
