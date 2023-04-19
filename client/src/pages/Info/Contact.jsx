// @ts-nocheck
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useIntersectionObserver from '@/hooks/useObserver'
// @ts-ignore
import mail from '@/assets/mail.svg'
// @ts-ignore
import phone from '@/assets/phone.svg'
// @ts-ignore
import fb from '@/assets/fb.svg'
// @ts-ignore
import lk from '@/assets/lk.svg'
// @ts-ignore
import ig from '@/assets/ig.svg'
import { useUser } from '@clerk/clerk-react'

export const Contact = () => {
  const AnimatedComponent = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '0px',
    animationDuration: 0.5,
    staggerChildren: 0.1,
    easing: 'easeInOut',
    direction: 'up',
    // @ts-ignore
    y: 50,
    fade: true,
  })

  //Validado de los diferentes campos y sus requerimientos
  const schema = yup.object({
    name: yup.string().required('Ingrese nombre'),
    email: yup
      .string()
      .required('Ingrese email')
      .matches(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        'Ingrese un mail valido',
      ),
    asunto: yup.string().required('Ingrese asunto'),
    category: yup.string().required('Ingrese categoria'),
    description: yup.string().required('Ingrese descripcion'),
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

  const { user } = useUser()
  console.log(user)
  return (
    <AnimatedComponent>
      <div className="w-screen">
        <div className="h-50 flex items-center justify-center bg-contact-img bg-cover p-2">
          <h1 className="font-amenable text-6xl font-bold text-blue-font">
            Contáctenos
          </h1>
        </div>
        <div className="flex h-56 w-full items-center justify-evenly">
          <a href="mailto:santykpo11@gmail.com" className="hover:scale-110">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={mail} alt="mail" className="h-14 w-14" />
              <p className="font-quicksand-light text-xl font-bold">
                gerencia@empli.com
              </p>
            </div>
          </a>
          <a href="tel:+51970649294" className="hover:scale-110">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={phone} alt="phone" className="h-14 w-14" />
              <p className="font-quicksand-light text-xl font-bold">
                970649294 / 985509343
              </p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/empli_org/"
            target="_blank"
            className="hover:scale-110"
            rel="noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={ig} alt="ig" className="h-14 w-14" />
              <p className="font-quicksand-light text-xl font-bold">
                Instagram
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/empli/"
            target="_blank"
            className="hover:scale-110"
            rel="noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={lk} alt="lk" className="h-14 w-14" />
              <p className="font-quicksand-light text-xl font-bold">Linkedin</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/Empli.org"
            target="_blank"
            className="hover:scale-110"
            rel="noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={fb} alt="fb" className="h-14 w-14" />
              <p className="font-quicksand-light text-xl font-bold">Facebook</p>
            </div>
          </a>
        </div>
        <h1 className="mb-negative text-center font-amenable text-5xl font-bold text-blue-font">
          Formulario de contacto
        </h1>
        <div className="flex h-contact w-screen items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 flex h-full w-4/6 flex-col items-center justify-evenly gap-4 rounded-3xl bg-white-font p-14 shadow-lg shadow-gray-900"
          >
            <div className="ml-32 flex w-full">
              <div className="h-full w-full">
                <label
                  htmlFor="name"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                  {...register('name')}
                />
                {errors.name?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div className="h-full w-full">
                <label
                  htmlFor="asunto"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  id="asunto"
                  className="block w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                  {...register('asunto')}
                />
                {errors.asunto?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">{errors.asunto.message}</p>
                )}
              </div>
            </div>
            <div className="ml-32 flex w-full">
              <div className="h-full w-full">
                <label
                  htmlFor="email"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                  {...register('email')}
                />
                {errors.email?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="h-full w-full">
                <label
                  htmlFor="category"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Categoría
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                  {...register('category')}
                />
                {errors.category?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>
            <label
              htmlFor="description"
              className="flex items-start justify-start font-quicksand-light text-lg font-semibold"
            >
              Descripción
            </label>
            <textarea
              // @ts-ignore
              cols="100"
              // @ts-ignore
              rows="5"
              name="description"
              id="description"
              className="resize-none rounded-lg border-2 border-black p-1"
              {...register('description')}
            />
            {errors.description?.message && (
              // eslint-disable-next-line prettier/prettier
              <p className="w-100 text-red-600">{errors.description.message}</p>
            )}
            <button
              type="submit"
              className="mt-8 h-12 w-2/6 rounded-xl bg-blue-font text-white-font shadow-lg shadow-gray-900"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </AnimatedComponent>
  )
}

export default Contact
