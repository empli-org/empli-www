// @ts-ignore
import ob1 from '../assets/ob-1.jpg'
// @ts-ignore
import ob2 from '../assets/ob-2.jpg'
// @ts-ignore
import ob3 from '../assets/ob-3.jpg'

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Login() {
  return (
    <div className="container flex mx-auto h-login justify-center items-center">
      <div className="container m-1.5 p-7 flex h-4/5 flex-wrap">
        <div className="flex flex-col w-3/5 py-28 px-32 justify-around bg-login-img bg-cover">
          <h1 className="text-5xl font-amenable text-white-font">
            Bienvenido a la comunidad Empli
          </h1>
          <h6 className="text-2xl font-quicksand-light text-white-font">
            Te deseamos éxito en tu búsqueda de empleo, y esperamos que
            encuentres en nuestra plataforma la oportunidad perfecta para llevar
            tu carrera al siguiente nivel. ¡Gracias por unirte a nosotros!
          </h6>
          <div className="flex justify-center items-center gap-4">
            <div className="flex">
              <img src={ob3} alt="ob" className="w-15 h-15 rounded-full" />
              <img
                src={ob1}
                alt="ob"
                className="w-15 h-15 rounded-full ml-negative"
              />
              <img
                src={ob2}
                alt="ob"
                className="w-15 h-15 rounded-full ml-negative"
              />
            </div>
            <div>
              <h6 className="text-xl font-quicksand-light text-white-font">
                Mas de +1k personas en nuestro marketplace
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/5 justify-around p-10">
          <h1 className="text-4xl font-amenable text-center text-blue-font">
            Inicio de sesion
          </h1>
          <form className="flex flex-col w-2/5 justify-around gap-12">
            <div className="flex flex-col justify-around gap-1">
              <label className="text-1xl font-quicksand-light font-medium">
                Usuario/Email
              </label>
              <input
                type="text"
                name="user"
                placeholder="Ingrese usuario"
                className="border border-solid boder-4 rounded-lg border-blue-font h-10 w-96 p-3"
              />
            </div>
            <div className="flex flex-col justify-around gap-1">
              <label className="text-1xl font-quicksand-light font-medium">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ingrese contraseña"
                className="border border-solid boder-3 rounded-lg border-blue-font cursor-text h-10 w-96 p-3"
              />
            </div>
          </form>
          <div className="flex items-center gap-2 justify-start">
            <input type="checkbox" name="remember" className="h-5 w-5" />
            <span className="text-1xl font-quicksand-light text-base font-semibold">
              Recordarme
            </span>
          </div>
          <div className="flex justify-cebter items-center mx-auto">
            <button
              type="submit"
              className="bg-white-font h-10 w-40 flex justify-center items-center rounded-3xl text-blue-font font-semibold"
            >
              Ingresar
            </button>
          </div>
          <h6 className="text-center">
            Haz olvidado tu contraseña?{' '}
            <a className="font-semibold underline">Click aqui!</a>
          </h6>
          <div className="flex flex-row gap-6 items-center justify-center">
            <button
              type="button"
              className="bg-white-font text-color-google w-32 h-10 rounded-3xl font-semibold"
            >
              Google
            </button>
            <button
              type="button"
              className="bg-bg-tw w-32 text-white-font h-10 rounded-3xl font-semibold"
            >
              Twitter
            </button>
            <button
              type="button"
              className="bg-bg-fb w-32 text-white-font h-10 rounded-3xl font-semibold"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
