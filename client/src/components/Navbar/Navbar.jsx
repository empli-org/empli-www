import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="relative flex  flex h-16 items-center justify-between space-x-4 bg-white text-black shadow-sm">
      <Link to="/">
        <img src="./logo-empli.png" alt="logo" width="150"></img>
      </Link>

      <div className="cursor-pointer px-4 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div className="flex space-x-4 ">
        <Link to="/ofertas" className="link-barra">
          Ofertas
        </Link>
        <Link to="/empresas" className="link-barra">
          Empresas
        </Link>
        <Link to="/noticias" className="link-barra">
          Noticias
        </Link>
        <Link to="/acerca" className="link-barra">
          Acerca
        </Link>
        <Link to="/contacto" className="link-barra">
          Contactanos
        </Link>
      </div>
      <div className="flex hidden space-x-4 pr-8 md:block ">
        <Link to="/login" className="link-barra">
          Login
        </Link>

        <span>|</span>
        <Link to="/crear" className="link-barra">
          Crear Cuenta
        </Link>
        <Outlet />
      </div>
    </nav>
  )
}

export default Navbar
