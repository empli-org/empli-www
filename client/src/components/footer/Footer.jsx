import { Container } from 'components'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-[#1c2441] py-10 text-white">
      <Container>
        <ul className="flex flex-nowrap items-center gap-9 space-y-0  ">
          <li>
            <Link to="/offers">Ofertas</Link>
          </li>

          <li>
            <Link to="/companies">Empresas</Link>
          </li>

          <li>
            <Link to="/news">Noticias</Link>
          </li>

          <li>
            <Link to="/about">Nosotros</Link>
          </li>

          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
