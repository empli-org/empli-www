import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-blue-950  text-white">
      <ul className=" mx-80 mt-2  grid grid-cols-2 gap-4 space-x-0 ">
        <li>
          <a href="/ofertas">Ofertas</a>
        </li>

        <li>
          <a href="/acerca">Acerca</a>
        </li>

        <a href="/contactos">Contactos</a>

        <li className="lista2">
          <a href="/noticias">Noticias</a>
        </li>

        <li className="lista2">
          {' '}
          <a href="/empresas">Empresas</a>
        </li>

        <a href="/Profesionales">Profesionales</a>
      </ul>
    </footer>
  )
}

export default Footer
