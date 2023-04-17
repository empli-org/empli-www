import { Link } from 'react-router-dom'
import { MenuIcon } from './icons'
// @ts-ignore
import empliLogo from '/empli-logo.png'

const NAV_LINKS = [
  { to: '/offers', label: 'Ofertas' },
  { to: '/talents', label: 'Profesionales' },
  { to: '/companies', label: 'Empresas' },
  { to: '/news', label: 'Noticias' },
  { to: '/about', label: 'Nosotros' },
  { to: '/contact', label: 'Contacto' },
]

const Navbar = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between space-x-4 px-4 text-black shadow-sm">
      <Link to="/">
        <img src={empliLogo} alt="logo" className="w-16" />
      </Link>

      <div className="hidden space-x-6 md:flex">
        {NAV_LINKS.map(l => (
          <Link key={l.to} to={l.to} className="hover:underline">
            {l.label}
          </Link>
        ))}
      </div>

      <div className="hidden space-x-4 pr-8 md:flex">
        <Link to="/login" className="link-barra">
          Login
        </Link>
        <Link to="/crear" className="link-barra">
          Crear Cuenta
        </Link>
      </div>

      <MobileMenu />
    </nav>
  )
}

function MobileMenu() {
  return (
    <div className="block md:hidden">
      <button>
        <MenuIcon />
      </button>
    </div>
  )
}

export default Navbar
