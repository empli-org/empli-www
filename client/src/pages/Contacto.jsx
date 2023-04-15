// @ts-nocheck
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Contacto = () => {
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
    <div>
      <div className="w-screen h-52 bg-contact-img bg-cover flex justify-center items-center">
        <h1 className="font-amenable font-bold text-6xl text-blue-font">
          Contactenos
        </h1>
      </div>
      <div className="flex justify-center items-center h-contact w-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-evenly items-center bg-white-font w-4/6 h-full p-14 gap-4 rounded-3xl mt-7"
        >
          <div className="w-full flex ml-32">
            <div className="w-full h-full">
              <label className="block font-quicksand-light text-lg font-semibold">
                Nombre Completo
              </label>
              <input
                type="text"
                className="border-2 border-black w-3/5 block rounded-lg p-1"
                {...register('name')}
              />
              {errors.name?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="text-red-600 w-100">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full h-full">
              <label className="block font-quicksand-light text-lg font-semibold">
                Asunto
              </label>
              <input
                type="text"
                className="border-2 border-black w-3/5 block rounded-lg p-1"
                {...register('asunto')}
              />
              {errors.asunto?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="text-red-600 w-100">{errors.asunto.message}</p>
              )}
            </div>
          </div>
          <div className="w-full flex ml-32">
            <div className="w-full h-full">
              <label className="block font-quicksand-light text-lg font-semibold">
                Email
              </label>
              <input
                type="text"
                className="border-2 border-black w-3/5 rounded-lg p-1"
                {...register('email')}
              />
              {errors.email?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="text-red-600 w-100">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full h-full">
              <label className="block font-quicksand-light text-lg font-semibold">
                Categoria
              </label>
              <input
                type="text"
                className="border-2 border-black w-3/5 rounded-lg p-1"
                {...register('category')}
              />
              {errors.category?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="text-red-600 w-100">{errors.category.message}</p>
              )}
            </div>
          </div>
          <label className="flex items-start justify-start font-quicksand-light text-lg font-semibold">
            Descripcion
          </label>
          <textarea
            cols="100"
            rows="5"
            className="border-2 border-black resize-none rounded-lg p-1"
            {...register('description')}
          />
          {errors.description?.message && (
            // eslint-disable-next-line prettier/prettier
            <p className="text-red-600 w-100">{errors.description.message}</p>
          )}
          <button
            type="submit"
            className="mt-8 bg-blue-font w-2/6 h-12 rounded-xl text-white-font"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto
