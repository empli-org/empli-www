// @ts-nocheck
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useIntersectionObserver from '../../hooks/useObserver'

export const Contact = () => {
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
            Contactenos
          </h1>
        </div>
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
                  Categoria
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
              Descripcion
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


