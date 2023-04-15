// @ts-nocheck
// @ts-ignore
import ob1 from '../assets/ob-1.jpg'
// @ts-ignore
import ob2 from '../assets/ob-2.jpg'
// @ts-ignore
import ob3 from '../assets/ob-3.jpg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

/* eslint-disable jsx-a11y/label-has-associated-control */
const Register = () => {
  //Validado de los diferentes campos y sus requerimientos
  const schema = yup.object({
    user: yup
      .string()
      .required('Ingrese email')
      .matches(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        'Ingrese un mail valido',
      ),
    password: yup
      .string()
      .required('Ingrese contraseña')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
        'La contraseña debe contener una minuscula, una mayuscula, un numero y un caracter especial($@$!%*?&)',
      ),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),
  })

  //Controlador del formulario
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <div className="container flex mx-auto h-login justify-center items-center">
        <div className="container m-1.5 p-7 flex h-4/5 flex-wrap">
          <div className="flex flex-col w-3/5 py-28 px-32 justify-around bg-login-img bg-cover">
            <h1 className="text-5xl font-amenable text-white-font">
              Bienvenido a la comunidad Empli
            </h1>
            <h6 className="text-2xl font-quicksand-light text-white-font">
              Te deseamos éxito en tu búsqueda de empleo, y esperamos que
              encuentres en nuestra plataforma la oportunidad perfecta para
              llevar tu carrera al siguiente nivel. ¡Gracias por unirte a
              nosotros!
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
              Registrarse
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-2/5 justify-around gap-5"
            >
              <div className="flex flex-col justify-around gap-1">
                <label className="text-1xl font-quicksand-light font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Ingrese email"
                  className="border border-solid boder-4 rounded-lg border-blue-font h-10 w-96 p-3"
                  {...register('user')}
                />
                {errors.user?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <span className="text-red-600 w-100">{errors.user.message}</span>
                )}
              </div>
              <div className="flex flex-col justify-around gap-1">
                <label className="text-1xl font-quicksand-light font-medium">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Ingrese contraseña"
                  className="border border-solid boder-3 rounded-lg border-blue-font cursor-text h-10 w-96 p-3"
                  {...register('password')}
                />
                {errors.password?.message && (
                  <span className="text-red-600 w-100">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-around gap-1">
                <label className="text-1xl font-quicksand-light font-medium">
                  Repetir contraseña
                </label>
                <input
                  id="repeatPassword"
                  type="password"
                  name="repeatPassword"
                  placeholder="Repita contraseña"
                  className="border border-solid boder-3 rounded-lg border-blue-font cursor-text h-10 w-96 p-3"
                  {...register('repeatPassword')}
                />
                {errors.repeatPassword?.message && (
                  <span className="text-red-600 w-100">
                    {errors.repeatPassword.message}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 justify-start w-96">
                <input type="checkbox" name="remember" className="h-5 w-5" />
                <span className="text-1xl font-quicksand-light text-base font-semibold">
                  Acepto los{' '}
                  <a href="/Terminos" className="font-semibold underline">
                    Terminos y condiciones
                  </a>
                </span>
              </div>
              <div className="flex justify-cebter items-center mx-auto">
                <button
                  type="submit"
                  className="bg-white-font h-10 w-40 flex justify-center items-center rounded-3xl text-blue-font font-semibold ml-ing"
                >
                  Registrarme
                </button>
              </div>
            </form>
            <h6 className="text-center font-bold font-quicksand-light text-base">
              Ingresar con:
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
                className="bg-bg-lk w-32 text-white-font h-10 rounded-3xl font-semibold"
              >
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
