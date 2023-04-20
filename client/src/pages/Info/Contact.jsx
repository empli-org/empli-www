
import { FiSmartphone, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUser } from '@clerk/clerk-react'

export const Contact = () => {
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
    <div className="m-5">
      <div className="m-1 rounded-2xl bg-hint-of-red p-1 shadow-sm shadow-black">
        <div className="gap-x-1 md:justify-between lg:flex lg:items-center">
          <div className="flex flex-col items-center p-2 md:w-full lg:w-6/12">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-gulf-stream">
                Contacto
              </h1>
            </div>
            <li className="flex w-full list-none flex-col items-center gap-y-1 text-white">
              <ul className="flex items-center justify-center gap-x-1 break-words rounded-lg bg-blue-whale p-2 shadow-sm shadow-black md:w-8/12 lg:w-7/12">
                <Link
                  className="flex items-center justify-center gap-x-1"
                  to=""
                >
                  <FiSmartphone /> 0286.9944908 / 04249080683
                </Link>
              </ul>
              <ul className="flex items-center justify-center gap-x-1 rounded-lg bg-blue-whale p-2 shadow-sm shadow-black md:w-8/12 lg:w-7/12">
                <Link
                  className="flex items-center justify-center gap-x-1"
                  to="mailto:santykpo11@gmail.com"
                >
                  <FiMail /> empleos@empli.org
                </Link>
              </ul>
              <ul className="flex w-7/12 items-center justify-center gap-x-1 rounded-lg bg-blue-whale p-2 shadow-sm shadow-black md:w-8/12 lg:w-7/12">
                <Link
                  className="flex items-center justify-center gap-x-1"
                  to="https://www.linkedin.com/company/empli/"
                >
                  <FiLinkedin /> linkedin
                </Link>
              </ul>
              <ul className="flex w-7/12 items-center justify-center gap-x-1 rounded-lg bg-blue-whale p-2 shadow-sm shadow-black md:w-8/12 lg:w-7/12">
                <Link
                  className="flex items-center justify-center gap-x-1"
                  to="https://www.instagram.com/empli_org/"
                >
                  <FiInstagram /> instagram
                </Link>
              </ul>
            </li>
          </div>
          <div className="flex flex-col items-center justify-center md:w-full lg:w-6/12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="m-2 flex w-9/12 flex-col items-center justify-center gap-y-1 p-1"
            >
              <div className="relative">
                <input
                  className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-gulf-stream
                    pb-1
                    pl-3
                    pr-20
                    pt-7
                    text-white
                    shadow-sm
                    shadow-black
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                  type="text"
                  id="name"
                  placeholder=" "
                  {...register('name')}
                />
                {errors.name?.message && (
                  <p className="w-100 text-red-600">{errors.name.message}</p>
                )}
                <label
                  htmlFor="name"
                  className="text-md scale-80 absolute bottom-2 left-3 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-100 peer-focus:text-white"
                >
                  Nombre Completo
                </label>
              </div>
              <div className="relative">
                <input
                  className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-gulf-stream
                    pb-1
                    pl-3
                    pr-20
                    pt-7
                    text-white
                    shadow-sm
                    shadow-black
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                  type="text"
                  name="asunto"
                  id="asunto"
                  placeholder=" "
                  {...register('asunto')}
                />
                {errors.asunto?.message && (
                  <p className="w-100 text-red-600">{errors.asunto.message}</p>
                )}
                <label
                  htmlFor="asunto"
                  className="text-md scale-80 absolute bottom-2 left-3 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-100 peer-focus:text-white"
                >
                  Asunto
                </label>
              </div>
              <div className="relative">
                <input
                  className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-gulf-stream
                    pb-1
                    pl-3
                    pr-20
                    pt-7
                    text-white
                    shadow-sm
                    shadow-black
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                  type="text"
                  name="email"
                  id="email"
                  placeholder=" "
                  {...register('email')}
                />
                {errors.email?.message && (
                  // eslint-disable-next-line prettier/prettier
                  <p className="w-100 text-red-600">{errors.email.message}</p>
                )}
                <label
                  htmlFor="email"
                  className="text-md scale-80 absolute bottom-2 left-3 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-100 peer-focus:text-white"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-gulf-stream
                    pb-1
                    pl-3
                    pr-20
                    pt-7
                    text-white
                    shadow-sm
                    shadow-black
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                  type="text"
                  name="category"
                  id="category"
                  placeholder=" "
                  {...register('email')}
                />
                {errors.category?.message && (
                  <p className="w-100 text-red-600">
                    {errors.category.message}
                  </p>
                )}
                <label
                  htmlFor="category"
                  className="text-md scale-80 absolute bottom-2 left-3 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-100 peer-focus:text-white"
                >
                  Categoria
                </label>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="flex items-start justify-start font-quicksand-light text-lg font-bold text-blue-whale"
                >
                  Descripción
                </label>
                <textarea
                  cols="100"
                  rows="5"
                  name="description"
                  id="description"
                  className="flex w-full resize-none rounded-lg border-2 border-black p-1"
                  {...register('description')}
                />
                {errors.description?.message && (
                  <p className="w-100 text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="md-bg-gulf-sream rounded-full bg-blue-whale text-white shadow-sm shadow-black md:m-2 md:w-1/4 md:p-2 lg:m-1 lg:w-1/4 lg:p-1"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
