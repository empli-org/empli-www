// import { Container } from 'components'
import { Link } from 'react-router-dom'
import EmpliLogo from '@/components/ui/brand/EmpliLogo'
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer className="bg-blue-font py-10 text-white-font">
      {/* <Container> */}
      <div className="flex flex-col items-center justify-evenly h-left lg:flex-row lg:h-auto">
        <div className="lg:w-24 lg:h-10 w-44 h-20">
          <Link to="/" className="text-bg-green">
            <EmpliLogo />
          </Link>
        </div>
        <div>
          <ul className="flex flex-col lg:flex-row flex-nowrap items-center gap-3 lg:gap-9 space-y-0 font-amenable text-2xl lg:text-lg">
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
              <Link to="/pricing">Precios</Link>
            </li>

            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <div className="font-quicksand-light text-xl lg:text-base">
            <Link
              className="flex items-center justify-center gap-x-1"
              to="https://www.linkedin.com/company/empli/"
              target="_blank"
            >
              <FiLinkedin /> Linkedin
            </Link>
          </div>
          <div className="font-quicksand-light text-xl lg:text-base">
            <Link
              className="flex items-center justify-center gap-x-1"
              to="https://www.instagram.com/empli_org/"
              target="_blank"
            >
              <FiInstagram /> Instagram
            </Link>
          </div>
          <div className="font-quicksand-light text-xl lg:text-base">
            <Link
              className="flex items-center justify-center gap-x-1"
              to="https://www.facebook.com/Empli.org"
              target="_blank"
            >
              <FiFacebook /> Facebook
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center font-quicksand-light text-xl lg:mt-5 lg:text-base">
        &copy; 2022 Empli. Todos los derechos reservados
      </p>
      {/* </Container> */}
    </footer>
  )
}

export default Footer
