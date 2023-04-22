// @ts-ignore
import nuevo from '../assets/img/empresa9.jpeg'
// @ts-ignore
import lupa from '../assets/img/lupa.webp'
// @ts-ignore
import persona from '../assets/img/persona.png'
// @ts-ignore
import persona2 from '../assets/img/persona2.png'
// @ts-ignore
import persona3 from '../assets/img/persona3.png'
// @ts-ignore
import persona4 from '../assets/img/persona4.png'

// @ts-ignore
import empresaP from '../assets/img/empre.jpg'

// import { Container } from '../components/ui/Container.jsx'
import './HomeEmpresa.css'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const HomeEmpresa = () => {
  return (
    <div>
      <h1
        className="titulo"
        style={{
          position: 'absolute',

          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'black',
          zIndex: 2,
        }}
      >
        ¿Necesitas el mejor talento para tus proyectos de construcción?
      </h1>
      <h2
        className="titulo-2"
        style={{
          position: 'absolute',
          bottom: '55%',
          left: '32%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'black',
          zIndex: 2,
        }}
      >
        En EMPLI conseguirás todas las ofertas laborales disponibles para tu
        Empresa.
      </h2>

      <button
        className="boton"
        style={{
          position: 'absolute',
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
        }}
        onClick={() => {
          const element = document.getElementById('nosotros')
          element.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Conócenos
      </button>
      <img
        className="empresa"
        src={nuevo}
        alt="empresa"
        style={{
          width: '100%',
          objectFit: 'cover',
          height: '700px',
          position: 'absolute',
        }}
      ></img>
      <p
        id="nosotros"
        className="nosotros"
        style={{
          position: 'absolute',
          top: 'calc(90% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'black',
          zIndex: 1,
        }}
      >
        NOSOTROS
      </p>

      <div>
        <p
          className="parrafo"
          style={{
            display: 'inline-block',
            position: 'absolute',
            top: 'calc(100% + 80px)',
            left: '40%',
            transform: 'translateX(-50%)',

            zIndex: 1,
          }}
        >
          Somos una empresa que brinda servicios de Asesoría, Consultoría y
          outsourcing de Recursos Humanos el cual ofrece una propuesta de valor
          integral mediante la búsqueda, selección, evaluación de personal clave
          acorde a la necesidad y especificaciones del cliente. Con la finalidad
          de satisfacer sus necesidades y contar con el equipo idóneo para el
          crecimiento de su empresa.
        </p>
        <img
          className="lupa"
          src={lupa}
          alt="lupa"
          style={{ display: 'inline-block' }}
        />
      </div>
      <div className="contenedor-principal">
        <h2
          className="servicios"
          style={{
            display: 'inline-block',
            position: 'absolute',

            left: '40%',
            transform: 'translateX(-50%)',

            zIndex: 1,
          }}
        >
          NUESTROS SERVICIOS
        </h2>

        <div className="contenedor1">
          <div className="persona1">
            <img className="persona" src={persona} alt="persona"></img>
            <h2
              className="titulo-head"
              style={{
                display: 'inline-block',
                zIndex: 1,
              }}
            >
              Headhunting
            </h2>
            <p className="texto">
              El proceso de headhunting tiene como objetivo la búsqueda del
              profesional y/o técnico acorde a la descripción de la experiencia
              y formación académica que solicite el cliente.
            </p>
          </div>

          <div className="persona2">
            <img className="persona2" src={persona2} alt="persona2"></img>
            <h2
              className="titulo2"
              style={{
                display: 'inline-block',
              }}
            >
              Background check
            </h2>
            <p className="parrafo2">
              El servicio consiste en auditar y certificar la validez de los
              documentos otorgados por los profesionales, ello con la finalidad
              de reducir el riesgo en la contratación del candidato y posibles
              problemas legales a futuro.
            </p>
          </div>

          <div className="persona3">
            <img className="persona3" src={persona3} alt="persona3"></img>
            <h2
              className="titulo3"
              style={{
                display: 'inline-block',
              }}
            >
              Talentos de la Construcción
            </h2>
            <p className="parrafo3">
              ¿Te encuentras en la búsqueda de una mejora laboral? ¿Quieres
              ampliar tu red de contactos en el sector construcción? Únete a
              nuestra comunidad de talentos.
            </p>
          </div>

          <div className="persona4">
            <img className="persona4" src={persona4} alt="persona4"></img>
            <h2
              className="titulo4"
              style={{
                display: 'inline-block',
              }}
            >
              Orientación Vocacional
            </h2>
            <p className="texto4">
              Es un proceso en el que se busca guiar a los escolares a definir
              su elección profesional; y a futuro, se dé una adecuada inserción
              en el mundo laboral.
            </p>
          </div>
        </div>
      </div>
      <div className="segundo">
        <div>
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.23117775481!2d-77.03076542411978!3d-12.096320142827073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86603c49c17%3A0xec5cc9b70285a023!2sAv%20Juan%20de%20Arona%20755%2C%20San%20Isidro%2015046%2C%20Per%C3%BA!5e0!3m2!1ses!2sar!4v1682055608030!5m2!1ses!2sar"
            loading="lazy"
            title="mapa"
          >
            Mapa
          </iframe>
        </div>
        <div className="info">
          <p className="titulo-p">Info</p>
          <p className="p">Av. Juan de Arona 755 – Oficina 118</p>
          <p className="p">+51 985 509 343</p>
          <p className="p">contacto@empli.org</p>
          <section className="redes-sociales">
            <div>
              <a
                className="enlace"
                href="https://m.facebook.com/Empli.org"
                title="Seguir en Facebook"
              >
                <FaFacebook />
              </a>
            </div>
            <div>
              <a
                className="enlace"
                href="https://www.instagram.com/empli_org"
                title="Seguir en Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div>
              <a
                className="enlace"
                href="https://pe.linkedin.com/company/empli?trk=public_profile_topcard-current-company"
                title="Seguir en LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </section>
        </div>
        <img
          className="empresaP"
          src={empresaP}
          alt="empresa"
          style={{
            width: '100%',
            objectFit: 'cover',
            height: '700px',
          }}
        />
      </div>
    </div>
  )
}

export default HomeEmpresa
