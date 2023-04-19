import { Link } from 'react-router-dom'
import EmpliLogo from '@/components/ui/brand/EmpliLogo'
import { Container } from '@/components/ui/Container'
import { MenuItem } from './MenuItem'
import { CommunityItems, CompanyItems, TalentItems } from './NavbarItems'
import MobileMenu from './MobileMenu'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

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
                <MenuItem label="Empresas">
                  <MenuItem.Body>
                    <CompanyItems />
                  </MenuItem.Body>
                </MenuItem>
                <MenuItem label="Profesionales">
                  <MenuItem.Body>
                    <TalentItems />
                  </MenuItem.Body>
                </MenuItem>
                <MenuItem label="Comunidad">
                  <MenuItem.Body>
                    <CommunityItems />
                  </MenuItem.Body>
                </MenuItem>
                <li className="py-2">
                  <Link to="/pricing">Precios</Link>
                </li>
                <li className="py-2">
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className="hidden gap-4 text-sm lg:flex">
              <SignedOut>
                <button
                  className="p-3"
                  onClick={() =>
                    (window.location.href =
                      'https://delicate-cod-86.accounts.dev/sign-in')
                  }
                >
                  Ingresar
                </button>
                <button
                  className="rounded-md bg-blue-whale p-3 text-white hover:opacity-90"
                  onClick={() =>
                    (window.location.href =
                      'https://delicate-cod-86.accounts.dev/sign-up')
                  }
                >
                  Crear cuenta
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton />
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
