/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Login() {
  return (
    <div className="container flex mx-auto h-screen justify-center items-center ">
      <div className="container m-1.5 p-7 flex h-4/5 flex-wrap border-solid border-2 border-black">
        <div className="flex flex-col w-3/5 p-9 justify-around bg-login-img bg-cover">
          <h1 className="text-5xl font-amenable text-white-font">
            Bienvenido a la comunidad Empli
          </h1>
          <h6 className="text-2xl font-quicksand-light text-white-font">
            Te deseamos éxito en tu búsqueda de empleo, y esperamos que
            encuentres en nuestra plataforma la oportunidad perfecta para llevar
            tu carrera al siguiente nivel. ¡Gracias por unirte a nosotros!
          </h6>
          <h6 className="text-2xl font-quicksand-light text-white-font">
            Mas de 1k de personas en nuestro marketplace
          </h6>
        </div>
        <div className="flex flex-col w-2/5 justify-around p-10 border-solid border-2 border-black">
          <h1 className="text-4xl font-amenable text-center">
            Inicio de sesion
          </h1>
          <form className="flex flex-col w-2/5 justify-around gap-10">
            <div>
              <label className="text-1xl font-quicksand-light">
                Usuario/Email
              </label>
              <input type="text" name="user" placeholder="Ingrese usuario" />
            </div>
            <div>
              <label className="text-1xl font-quicksand-light">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ingrese contraseña"
              />
            </div>
          </form>
          <div className="flex items-center gap-2 justify-start">
            <input type="checkbox" name="remember" className="h-5 w-5" />
            <span className="text-1xl font-quicksand-light text-base">
              Recordarme
            </span>
          </div>
          <button type="submit">Ingresar</button>
          <h6 className="text-center">
            Haz olvidado tu contraseña? <a href="./jajas">Click aqui!</a>
          </h6>
          <div className="flex flex-row gap-6 items-center justify-center">
            <button>Google</button>
            <button>Twitter</button>
            <button>Facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}
