/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useIntersectionObserver from '../components/hooks/useObserver'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import fb from '../assets/fb.svg'
import lk from '../assets/lk.svg'
import ig from '../assets/ig.svg'

const Contact = () => {
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
  return (
    <AnimatedComponent>
      <div className="w-screen">
        <div className="h-50 flex items-center justify-center bg-contact-img bg-cover p-2">
          <h1 className="font-amenable text-6xl font-bold text-blue-font">
            Contáctenos
          </h1>
        </div>
        <div className="flex justify-evenly items-center w-full h-56">
          <a href="mailto:santykpo11@gmail.com" className="hover:scale-110">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={mail} alt="mail" className="w-14 h-14" />
              <p className="font-quicksand-light text-xl font-bold">
                gerencia@empli.com
              </p>
            </div>
          </a>
          <a href="tel:+51970649294" className="hover:scale-110">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={phone} alt="phone" className="w-14 h-14" />
              <p className="font-quicksand-light text-xl font-bold">
                970649294 / 985509343
              </p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/empli_org/"
            target="_blank"
            className="hover:scale-110"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={ig} alt="ig" className="w-14 h-14" />
              <p className="font-quicksand-light text-xl font-bold">
                Instagram
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/empli/"
            target="_blank"
            className="hover:scale-110"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={lk} alt="lk" className="w-14 h-14" />
              <p className="font-quicksand-light text-xl font-bold">Linkedin</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/Empli.org"
            target="_blank"
            className="hover:scale-110"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={fb} alt="fb" className="w-14 h-14" />
              <p className="font-quicksand-light text-xl font-bold">Facebook</p>
            </div>
          </a>
        </div>
        <h1 className="text-5xl text-blue-font font-bold font-amenable text-center mb-negative">
          Formulario de contacto
        </h1>
        <div className="flex h-contact w-screen items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 flex h-full w-4/6 flex-col items-center justify-evenly gap-4 rounded-3xl bg-white-font p-14 shadow-lg shadow-gray-900"
          >
            <div className="ml-32 flex w-full">
              <div className="h-full w-full">
                <label className="block font-quicksand-light text-lg font-semibold">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="block w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                  {...register('name')}
                />
                {errors.name?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div className="h-full w-full">
                <label className="block font-quicksand-light text-lg font-semibold">
                  Asunto
                </label>
                <input
                  type="text"
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
                <label className="block font-quicksand-light text-lg font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  className="w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                  {...register('email')}
                />
                {errors.email?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="h-full w-full">
                <label className="block font-quicksand-light text-lg font-semibold">
                  Categoría
                </label>
                <input
                  type="text"
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
            <label className="flex items-start justify-start font-quicksand-light text-lg font-semibold">
              Descripción
            </label>
            <textarea
              cols="100"
              rows="5"
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
