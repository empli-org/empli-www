import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUser } from '@clerk/clerk-react'
import { LateralBar } from '../../components/LateralBar/LateralBar'

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
      <div className="m-0 flex justify-center p-0">
        <div className="w-2/4 md:justify-center lg:flex lg:items-stretch">
          <LateralBar />
          <div className="relative z-40 flex w-3/4 flex-col items-center justify-center rounded-2xl bg-hint-of-red shadow-sm shadow-black">
            <div className="flex w-full justify-center">
              <h1 className="text-2xl font-bold text-gulf-stream">Contacto</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative z-50 flex w-fit flex-col items-center justify-center gap-y-1 p-4"
            >
              <div className="flex w-full items-center justify-between gap-x-1">
                <div className="w-1/3">
                  <label
                    htmlFor="name"
                    className="text-md scale-80 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-focus:text-white"
                  >
                    Nombre
                  </label>
                  <input
                    className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-white
                    p-3
                    text-blue-whale
                    shadow-sm
                    shadow-black
                    placeholder:text-white
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                    type="text"
                    id="name"
                    placeholder="Escribe..."
                    {...register('name')}
                  />
                  {errors.name?.message && (
                    <p className="w-100 text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="name"
                    className="text-md scale-80 z-10 mb-1 origin-[0] transform font-semibold text-blue-whale duration-150 peer-focus:text-white"
                  >
                    Segundo Nombre
                  </label>
                  <input
                    className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-white
                    p-3
                    text-blue-whale
                    shadow-sm
                    shadow-black
                    placeholder:text-white
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                    type="text"
                    id="name"
                    placeholder="Escribe..."
                    {...register('name')}
                  />
                  {errors.name?.message && (
                    <p className="w-100 text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="name"
                    className="text-md scale-80 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-focus:text-white"
                  >
                    Apellido
                  </label>
                  <input
                    className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-white
                    p-3
                    text-blue-whale
                    shadow-sm
                    shadow-black
                    placeholder:text-white
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                    type="text"
                    id="name"
                    placeholder="Escribe..."
                    {...register('name')}
                  />
                  {errors.name?.message && (
                    <p className="w-100 text-red-600">{errors.name.message}</p>
                  )}
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-x-1">
                <div className="w-1/3">
                  <label
                    htmlFor="asunto"
                    className="text-md scale-80 z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-focus:text-white"
                  >
                    Asunto
                  </label>
                  <input
                    className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-white
                    p-3
                    text-blue-whale
                    shadow-sm
                    shadow-black
                    placeholder:text-white
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                    type="text"
                    name="asunto"
                    id="asunto"
                    placeholder="Escribe..."
                    {...register('asunto')}
                  />
                  {errors.asunto?.message && (
                    <p className="w-100 text-red-600">
                      {errors.asunto.message}
                    </p>
                  )}
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="email"
                    className="text-md z-10 mb-1 origin-[0] -translate-y-3 transform font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-focus:text-white"
                  >
                    Email
                  </label>
                  <input
                    className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-white
                    p-3
                    text-blue-whale
                    shadow-sm
                    shadow-black
                    placeholder:text-white
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Escribe..."
                    {...register('email')}
                  />
                  {errors.email?.message && (
                    // eslint-disable-next-line prettier/prettier
                    <p className="w-100 text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="category"
                    className="text-md z-10 mb-1 origin-[0] font-semibold text-blue-whale duration-150 after:ml-0.5 after:text-red-500 after:content-['*'] peer-focus:text-white"
                  >
                    Categoria
                  </label>
                  <input
                    className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                  appearance-none
                  rounded-md
                    bg-white
                    p-3
                    text-blue-whale
                    shadow-sm
                    shadow-black
                    placeholder:text-white
                    focus:bg-blue-whale
                    focus:text-white
                    focus:shadow-white
                    focus:outline-none
                    focus:ring-0
                    "
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Escribe..."
                    {...register('email')}
                  />
                  {errors.category?.message && (
                    <p className="w-100 text-red-600">
                      {errors.category.message}
                    </p>
                  )}
                </div>
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
                  className="flex w-full resize-none rounded-lg p-1"
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
                className="md-bg-gulf-sream rounded-full bg-blue-whale text-white shadow-sm shadow-black hover:bg-gulf-stream hover:font-semibold hover:text-black hover:opacity-80 md:m-2 md:w-1/4 md:p-2 lg:m-1 lg:w-full lg:p-1"
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
