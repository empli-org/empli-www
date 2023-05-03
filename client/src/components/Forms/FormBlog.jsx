// @ts-nocheck
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function FormBlog() {
  const [select, setSelect] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const MySwal = withReactContent(Swal)

  const onSubmit = data => {
    MySwal.fire('Listo!', 'Publicacion realizada', 'success')
    document.getElementById('form').reset()
    console.log(data)
  }

  const style =
    'px-2 py-3 bg-hint-of-red border-2 border-opacity rounded-lg font-quicksand-light font-semibold relative text-blue-whale'

  const style2 =
    'p-2 w-3/4 font-quicksand-light border-2 border-opacity-hint rounded-xl'

  const handleVideo = () => {
    setSelect(true)
  }
  const handleLink = () => {
    setSelect(false)
  }
  return (
    <div className="flex items-center justify-center">
      <form
        action=""
        className="m-6 flex w-full flex-col items-center justify-center xl:m-1 xl:w-3/4"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="mt-10 text-center font-amenable text-3xl font-normal text-blue-whale">
            ¿Que publicacion desea hacer?
          </h1>
          <section className="mt-7 flex flex-wrap justify-around gap-4">
            <div className={style} id="video">
              <input
                type="radio"
                name="tipo"
                id="Videos"
                onClick={handleVideo}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Videos"> Videos</label>
            </div>
            <div className={style}>
              <input
                type="radio"
                name="tipo"
                id="Entrevistas"
                onClick={handleVideo}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Entrevistas"> Entrevistas</label>
            </div>
            <div className={style}>
              <input
                type="radio"
                name="tipo"
                id="Podcast"
                onClick={handleLink}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Podcast"> Podcast</label>
            </div>
            <div className={style}>
              <input
                type="radio"
                name="tipo"
                id="Boletin"
                onClick={handleLink}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Boletin informativo"> Boletin informativo</label>
            </div>
            <div className={style}>
              <input
                type="radio"
                name="tipo"
                id="Bienestar"
                onClick={handleLink}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Bienestar laboral"> Bienestar laboral</label>
            </div>
            <div className={style}>
              <input
                type="radio"
                name="tipo"
                id="Proyectos"
                onClick={handleLink}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Proyectos importantes">
                {' '}
                Proyectos importantes
              </label>
            </div>
            <div className={style}>
              <input
                type="radio"
                name="tipo"
                id="Capacitaciones"
                onClick={handleLink}
                {...register('tipo', { required: 'Seleccione una opción' })}
              />
              <label htmlFor="Capacitaciones de interes">
                {' '}
                Capacitaciones de interes
              </label>
            </div>
            {errors.tipo && (
              <p className="block font-quicksand font-bold text-red-600">
                Seleccione una opción
              </p>
            )}
          </section>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="mt-10 text-center font-amenable text-4xl font-normal text-blue-whale">
            Crear publicacion
          </h1>
          <div className="w-full rounded-3xl bg-hint-of-red shadow-xl">
            <div className="flex w-full flex-col items-center justify-around gap-5 p-10">
              <div className="flex w-full flex-col justify-around gap-4 md:w-3/4 lg:w-full lg:flex-row">
                <div className="w-full">
                  <label
                    htmlFor="title"
                    className="font-quicksand-light block font-medium"
                  >
                    Titulo
                  </label>
                  <input
                    type="text"
                    className={style2}
                    name="titulo"
                    {...register('titulo', {
                      required: 'Ingrese un titulo',
                    })}
                  />
                  {errors.titulo && (
                    <span className="block font-quicksand font-bold text-red-600">
                      Ingrese un titulo
                    </span>
                  )}
                </div>
                {select ? (
                  <div className="w-full">
                    <label
                      htmlFor="archivo"
                      className="font-quicksand-light block font-medium"
                    >
                      Archivo
                    </label>
                    <input
                      type="file"
                      className="w-3/4"
                      name="archivo"
                      {...register('archivo')}
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <label
                      htmlFor="link"
                      className="font-quicksand-light block font-medium"
                    >
                      Link
                    </label>
                    <input
                      type="text"
                      className={style2}
                      name="link"
                      {...register('link', {
                        required: 'Ingrese un link',
                      })}
                    />
                    {errors.link && (
                      <span className="block font-quicksand font-bold text-red-600">
                        Ingrese un link
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center">
                  <label
                    htmlFor="descripcion"
                    className="font-quicksand-light block font-medium"
                  >
                    Descripcion
                  </label>
                  <textarea
                    name="descripcion"
                    id=""
                    className="w-full md:w-3/4 h-40 resize-none p-2 font-quicksand-light border-2 border-opacity-hint rounded-xl"
                    {...register('descripcion', {
                      required: 'Ingrese una descripcion',
                    })}
                  ></textarea>
                  {errors.descripcion && (
                    <span className="font-quicksand font-bold text-red-600">
                      Ingrese una descripcion
                    </span>
                  )}
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center">
                  <label
                    htmlFor="cuerpo"
                    className="font-quicksand-light block font-medium"
                  >
                    Cuerpo
                  </label>
                  <textarea
                    name="cuerpo"
                    id=""
                    className="w-full md:w-3/4 h-40 resize-none p-2 font-quicksand-light border-2 border-opacity-hint rounded-xl"
                    {...register('cuerpo', {
                      required: 'Ingrese un cuerpo para el blog',
                    })}
                  ></textarea>
                  {errors.cuerpo && (
                    <span className="font-quicksand font-bold text-red-600">
                      Ingrese un cuerpo para el blog
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-5 flex w-3/4 flex-col justify-around gap-4 sm:w-1/2 sm:flex-row">
                <div className="font-quicksand-light relative rounded-lg border-2 border-opacity bg-blue-whale px-2 py-3 font-semibold text-hint-of-red">
                  <input
                    type="checkbox"
                    name="premium"
                    {...register('premium')}
                  />
                  <label
                    htmlFor="premium"
                    className="font-quicksand-light font-medium"
                  >
                    {' '}
                    Premium
                  </label>
                </div>
                <div className="font-quicksand-light relative rounded-lg border-2 border-opacity bg-blue-whale px-2 py-3 font-semibold text-hint-of-red">
                  <input
                    type="checkbox"
                    name="publicado"
                    {...register('publicado')}
                  />
                  <label
                    htmlFor="publicado"
                    className="font-quicksand-light font-medium"
                  >
                    {' '}
                    Publicado
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <button
                type="submit"
                className="my-8 h-12 w-2/6 rounded-xl bg-blue-font font-amenable text-white-font shadow-lg shadow-gray-900"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
