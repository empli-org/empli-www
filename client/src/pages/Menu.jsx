import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="grid-rows-7 grid items-center bg-purple-800 text-center">
      <Link className='"p-4' to="/">
        Home
      </Link>
      <Link className='"p-4' to="/ofertas">
        Ofertas
      </Link>
      <Link className='"p-4' to="/empresas">
        Empresas
      </Link>
      <Link className='"p-4' to="/>noticias">
        Noticias
      </Link>
      <Link className='"p-4' to="/acerca">
        Acerca
      </Link>
      <Link className='"p-4' to="/contactanos">
        Contactanos
      </Link>
      <Link className='"p-4' to="/login">
        Login
      </Link>
      <Link className='"p-4' to="/registro">
        Crear Cuenta
      </Link>
    </div>
  )
}

export default Menu
