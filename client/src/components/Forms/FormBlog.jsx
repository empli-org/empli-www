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
    <div className="flex justify-center items-center">
      <form
        action=""
        className="flex flex-col items-center justify-center w-full m-6 xl:m-1 xl:w-3/4"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-amenable font-normal mt-10 text-blue-whale">
            ¿Que publicacion desea hacer?
          </h1>
          <section className="flex justify-around flex-wrap gap-4 mt-7">
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
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-amenable font-normal mt-10 text-blue-whale">
            Crear publicacion
          </h1>
          <div className="bg-hint-of-red shadow-xl rounded-3xl w-full">
            <div className="flex flex-col w-full justify-around items-center gap-5 p-10">
              <div className="flex flex-col lg:flex-row w-full md:w-3/4 lg:w-full justify-around gap-4">
                <div className="w-full">
                  <label
                    htmlFor="title"
                    className="block font-quicksand-light font-medium"
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
                      className="block font-quicksand-light font-medium"
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
                      className="block font-quicksand-light font-medium"
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
              <div className="flex justify-center items-center w-full">
                <div className="w-full flex flex-col items-center justify-center">
                  <label
                    htmlFor="descripcion"
                    className="block font-quicksand-light font-medium"
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
              <div className="flex justify-center items-center w-full">
                <div className="w-full flex flex-col items-center justify-center">
                  <label
                    htmlFor="cuerpo"
                    className="block font-quicksand-light font-medium"
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
              <div className="flex flex-col sm:flex-row w-3/4 sm:w-1/2 justify-around gap-4 mt-5">
                <div className="px-2 py-3 bg-blue-whale border-2 border-opacity rounded-lg font-quicksand-light font-semibold relative text-hint-of-red">
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
                <div className="px-2 py-3 bg-blue-whale border-2 border-opacity rounded-lg font-quicksand-light font-semibold relative text-hint-of-red">
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
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="my-8 h-12 w-2/6 font-amenable rounded-xl bg-blue-font text-white-font shadow-lg shadow-gray-900"
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
