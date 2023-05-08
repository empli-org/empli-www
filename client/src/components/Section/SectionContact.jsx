import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const SectionContact = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
        <div className="w-1/2 items-center justify-center bg-[#F1F5F9]  mr-1 rounded-2xl">
          <div className="flex flex-col items-center justify-center h-100">
            <div>
              <div className="flex my-3  bg-white shadow-lg rounded-2xl w-full p-4 m-2">
                <h3 className="mr-4 font-amenable text-xl">Direccion:</h3>
                <h3 className="font-quicksand">
                  Av. Juan de Arona 755 – Oficina 118
                </h3>
              </div>
              <div className="flex my-3  bg-white shadow-lg rounded-2xl w-full p-4 m-2">
                <h3 className="mr-4 font-amenable text-xl">Telefono:</h3>
                <h3 className="font-quicksand"> +51 985 509 343</h3>
              </div>
              <div className="flex my-3  bg-white shadow-lg rounded-2xl w-full p-4 m-2">
                <h3 className="mr-4 font-amenable text-xl">Email:</h3>
                <h3 className="font-quicksand"> contacto@empli.org</h3>
              </div>
              <div className="flex my-3  bg-white shadow-lg rounded-2xl w-full p-4 m-2">
              <h3 className="mr-4 font-amenable text-xl">Social media:</h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 text-2xl "
                  href="https://m.facebook.com/Empli.org"
                  title="Seguir en Facebook"
                >
                  <FaFacebook className="text-facebook-blue" />
                </a>
                <a
                  className="mx-3 text-2xl "
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/empli_org"
                  title="Seguir en Instagram"
                >
                  <FaInstagram
                    className="text-instagram-purple"

                  />
                </a>
                <a
                  className="mx-3 text-2xl taxt-lochinvar"
                  target="_blank"
                  rel="noreferrer"
                  href="https://pe.linkedin.com/company/empli?trk=public_profile_topcard-current-company"
                  title="Seguir en LinkedIn"
                >
                  <FaLinkedin className="text-linkedin-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 items-center justify-center ml-1 ">
          <iframe
            className="rounded-2xl w-full h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.23117775481!2d-77.03076542411978!3d-12.096320142827073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86603c49c17%3A0xec5cc9b70285a023!2sAv%20Juan%20de%20Arona%20755%2C%20San%20Isidro%2015046%2C%20Per%C3%BA!5e0!3m2!1ses!2sar!4v1682055608030!5m2!1ses!2sar"
            loading="lazy"
            title="mapa"
          >
            Mapa
          </iframe>
        </div>
      </div>
    </>
  )
}
