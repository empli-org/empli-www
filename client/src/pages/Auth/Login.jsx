// @ts-nocheck
// @ts-ignore
import ob1 from '../../assets/ob-1.jpg'
import ob2 from '../../assets/ob-2.jpg'
import ob3 from '../../assets/ob-3.jpg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useIntersectionObserver from 'hooks/useObserver'
/* eslint-disable jsx-a11y/label-has-associated-control */
export const Login = () => {
  const AnimatedComponent = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '0px',
    animationDuration: 0.5,
    staggerChildren: 0.1,
    easing: 'easeInOut',
    direction: 'up',
    y: 50,
    fade: true,
  })

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
    <AnimatedComponent>
      <div className="bg-white-font">
        <div className="container mx-auto flex h-login items-center justify-center">
          <div className="container m-1.5 flex h-4/5 flex-wrap p-7">
            <div className="flex w-3/5 flex-col justify-around rounded-l-3xl bg-login-img bg-cover px-32 py-28">
              <h1 className="font-amenable text-5xl text-white-font">
                Bienvenido a la comunidad Empli
              </h1>
              <h6 className="font-quicksand-light text-2xl text-white-font">
                Te deseamos éxito en tu búsqueda de empleo, y esperamos que
                encuentres en nuestra plataforma la oportunidad perfecta para
                llevar tu carrera al siguiente nivel. ¡Gracias por unirte a
                nosotros!
              </h6>
              <div className="flex items-center justify-center gap-4">
                <div className="flex">
                  <img src={ob3} alt="ob" className="h-15 w-15 rounded-full" />
                  <img
                    src={ob1}
                    alt="ob"
                    className="ml-negative h-15 w-15 rounded-full"
                  />
                  <img
                    src={ob2}
                    alt="ob"
                    className="ml-negative h-15 w-15 rounded-full"
                  />
                </div>
                <div>
                  <h6 className="font-quicksand-light text-xl text-white-font">
                    Mas de +1k personas en nuestro marketplace
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex w-2/5 flex-col justify-around rounded-r-3xl bg-white p-10">
              <h1 className="text-center font-amenable text-4xl text-blue-font">
                Inicio de sesión
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-2/5 flex-col justify-around gap-10"
              >
                <div className="flex flex-col justify-around gap-1">
                  <label className="text-1xl font-quicksand-light font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    name="user"
                    placeholder="Ingrese email"
                    className="boder-4 h-10 w-96 rounded-lg border border-solid border-blue-font p-3"
                    {...register('user')}
                  />
                  {errors.user?.message && (
                    // eslint-disable-next-line prettier/prettier
                    <span className="w-100 text-red-600">
                      {errors.user.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-around gap-1">
                  <label className="text-1xl font-quicksand-light font-medium">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingrese contraseña"
                    className="boder-3 h-10 w-96 cursor-text rounded-lg border border-solid border-blue-font p-3"
                    {...register('password')}
                  />
                  {errors.password?.message && (
                    <span className="w-100 text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-start gap-2">
                  <input type="checkbox" name="remember" className="h-5 w-5" />
                  <span className="text-1xl font-quicksand-light text-base font-semibold">
                    Recordarme
                  </span>
                </div>
                <div className="mx-auto flex items-center justify-center">
                  <button
                    type="submit"
                    className="ml-ing flex h-10 w-40 items-center justify-center rounded-3xl bg-white-font font-semibold text-blue-font"
                  >
                    Ingresar
                  </button>
                </div>
              </form>
              <h6 className="text-center">
                Haz olvidado tu contraseña?{' '}
                <a className="font-semibold underline">Click aqui!</a>
              </h6>
              <div className="flex flex-row items-center justify-center gap-6">
                <button
                  type="button"
                  className="h-10 w-32 rounded-3xl bg-white-font font-semibold text-color-google"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="h-10 w-32 rounded-3xl bg-bg-lk font-semibold text-white-font"
                >
                  Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedComponent>
  )
}
