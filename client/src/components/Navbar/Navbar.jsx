import { Link } from 'react-router-dom'
import EmpliLogo from '@/components/ui/brand/EmpliLogo'
import { Container } from '@/components/ui/Container'
import { MenuItem } from './MenuItem'
import { CommunityItems, ContactItems } from './NavbarItems'
import MobileMenu from './MobileMenu'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

export const Navbar = () => {
  return (
    <header className="w-full bg-hint-of-red">
      <Container>
        <nav className="flex w-full items-center justify-between shadow-sm">
          <div className="flex w-full items-center justify-between py-6">
            <div className="flex items-center gap-16">
              <Link to="/" className="w-24 text-gulf-stream">
                <EmpliLogo />
              </Link>
              <ul className="hidden items-stretch gap-10 text-sm text-gray-700 lg:flex">
                <li className="py-2">
                  <Link to="/info/empresas">Empresas</Link>
                </li>
                <li className="py-2">
                  <Link to="/info/professionals">Profesionales</Link>
                </li>
                <MenuItem label="Comunidad">
                  <MenuItem.Body>
                    <CommunityItems />
                  </MenuItem.Body>
                </MenuItem>
                <li className="py-2">
                  <Link to="/pricing">Precios</Link>
                </li>
                <MenuItem label="Contacto">
                  <MenuItem.Body>
                    <ContactItems />
                  </MenuItem.Body>
                </MenuItem>
              </ul>
            </div>
            <div className="hidden gap-4 text-sm lg:flex">
              <SignedOut>
                <Link className="py-3" to="/auth/login">
                  Ingresar
                </Link>
                <Link
                  to="/auth/register"
                  className="rounded-md bg-blue-whale p-3 text-white hover:opacity-90"
                >
                  Crear cuenta
                </Link>
              </SignedOut>
              <SignedIn>
                <Link
                  to="/dashboard"
                  className="rounded-md bg-blue-whale p-3 text-white hover:opacity-90"
                >
                  Mi cuenta
                </Link>
              </SignedIn>
            </div>
            <div className="flex text-sm lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
