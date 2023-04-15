/* eslint-disable prettier/prettier */
import Navbar from '../components/Navbar'
import Ofertas from './Ofertas'
import Empresas from './Empresas'
import Acerca from './Acerca'
import Contacto from './Contacto'
import Login from './Login'
import CrearLogin from './CrearLogin'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import '../components/Navbar.css'
import Footer from './footer/Footer'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-5xl font-bold">
          Encuentra{' '}
          <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-green-600">
            <span className="relative ">La Mejor</span>
          </span>
          <br />
          Oferta de Trabajo
        </h1>
      </div>

      <div className="container2">
        <h2 className="segundo">
          Encontrar trabajo puede ser un proceso difícil. En <br></br>nuestra
          red, contamos con una gran cantidad de <br></br>empresas que buscan
          personas talentosas como <br></br>tú para unirse a su equipo.{' '}
        </h2>
      </div>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ofertas" element={<Ofertas />}></Route>
        <Route path="/empresas" element={<Empresas />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register " element={<CrearLogin />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
