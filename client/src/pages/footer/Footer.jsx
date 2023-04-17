import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="w-1/5"></div>
      <ul className="flex flex-wrap items-center gap-9 space-y-0  ">
        <li>
          <a href="/ofertas">Ofertas</a>
        </li>

        <li>
          <a href="/empresas">Empresas</a>
        </li>

        <li>
          <a href="/noticias">Noticias</a>
        </li>

        <li>
          <a href="/nosotros">Nosotros</a>
        </li>

        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
