// @ts-nocheck
import { dataArea, dataLugar } from './data'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function FormOffer() {
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
  return (
    <div>
      <h1 className="mb-4 mt-10 text-center font-amenable text-5xl font-normal text-blue-whale">
        crear oferta
      </h1>
      <form
        className="flex w-full items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
<<<<<<< HEAD
        <div className="flex w-3/5 flex-col items-center justify-center gap-5 rounded-3xl bg-hint-of-red p-5 shadow-xl">
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="ID"
                className="font-quicksand-light w-3/4 font-semibold"
=======
        <div className="m-5 flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-hint-of-red p-5 shadow-xl xl:m-0 xl:w-4/5 2xl:w-3/5">
          <div className="flex w-full flex-col justify-around gap-4 md:flex-row md:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="ID"
                className="font-quicksand-light w-11/12 font-semibold lg:w-3/4"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Código único
              </label>
              <input
                type="text"
                name="ID"
<<<<<<< HEAD
                className="w-3/4 rounded-lg border-2 border-blue-whale p-2"
                {...register('ID')}
=======
                className="w-11/12 lg:w-3/4 rounded-lg border-2 border-blue-whale p-2"
                {...register('codigo', { required: 'Ingrese un codigo' })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              />
              {errors.codigo && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese un codigo
                </span>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="titulo"
<<<<<<< HEAD
                className="font-quicksand-light w-3/4 font-semibold"
=======
                className="font-quicksand-light w-11/12 font-semibold lg:w-3/4"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Titulo
              </label>
              <input
                type="text"
                name="titulo"
<<<<<<< HEAD
                className="w-3/4 rounded-lg border-2 border-blue-whale p-2"
                {...register('titulo')}
=======
                className="w-11/12 lg:w-3/4 rounded-lg border-2 border-blue-whale p-2"
                {...register('titulo', { required: 'Ingrese un titulo' })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              />
              {errors.titulo && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese un titulo
                </span>
              )}
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="descripcion"
                className="font-quicksand-light w-3/4 font-semibold"
=======
          <div className="flex w-full flex-col justify-around gap-5 lg:flex-row lg:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="descripcion"
                className="font-quicksand-light w-full font-semibold lg:w-3/4"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Descripcion
              </label>
              <textarea
                name="descripcion"
<<<<<<< HEAD
                className="h-24 w-3/4 resize-none rounded-lg border-2 border-blue-whale p-2"
                {...register('descripcion')}
=======
                className="h-48 lg:h-24 w-full lg:w-3/4 resize-none rounded-lg border-2 border-blue-whale p-2"
                {...register('descripcion', {
                  required: 'Ingrese una descripcion',
                })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              ></textarea>
              {errors.descripcion && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese una descripcion
                </span>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="experiencia"
<<<<<<< HEAD
                className="font-quicksand-light w-3/4 font-semibold"
=======
                className="font-quicksand-light w-full font-semibold lg:w-3/4"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Experiencia requerida
              </label>
              <textarea
                name="experiencia"
<<<<<<< HEAD
                className="h-24 w-3/4 resize-none rounded-lg border-2 border-blue-whale p-2"
                {...register('experiencia')}
=======
                className="h-48 lg:h-24 w-full lg:w-3/4 resize-none rounded-lg border-2 border-blue-whale p-2"
                {...register('experiencia', {
                  required: 'Ingrese experiencia requerida',
                })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              ></textarea>
              {errors.experiencia && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese experiencia requerida
                </span>
              )}
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="area"
                className="font-quicksand-light w-1/2 font-semibold"
=======
          <div className="flex w-full flex-col justify-around gap-4 sm:flex-row sm:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="area"
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Area de trabajo
              </label>
              <select
                name="area"
<<<<<<< HEAD
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('area')}
=======
                className="w-11/12 lg:w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('area', { required: 'Seleccione un area' })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                <option value="default" selected disabled>
                  Seleccione un area de trabajo
                </option>
                {dataArea.map((data, ind) => {
                  return (
                    <option value={data} key={ind}>
                      {data}
                    </option>
                  )
                })}
              </select>
              {errors.area && (
                <span className="font-quicksand font-bold text-red-600">
                  Seleccione un area
                </span>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="lugar"
<<<<<<< HEAD
                className="font-quicksand-light w-1/2 font-semibold"
=======
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Lugar de trabajo
              </label>
              <select
                name="lugar"
<<<<<<< HEAD
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('lugar')}
=======
                className="w-11/12 lg:w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('lugar', { required: 'Seleccione un lugar' })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                <option value="default" selected disabled>
                  Seleccione un lugar de trabajo
                </option>
                {dataLugar.map((data, ind) => {
                  return (
                    <option value={data} key={ind}>
                      {data}
                    </option>
                  )
                })}
              </select>
              {errors.lugar && (
                <span className="font-quicksand font-bold text-red-600">
                  Seleccione un lugar
                </span>
              )}
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="min"
                className="font-quicksand-light w-1/2 font-semibold"
=======
          <div className="flex w-full flex-col justify-around gap-4 sm:flex-row sm:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="min"
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Salario minimo
              </label>
              <input
                type="number"
                name="min"
<<<<<<< HEAD
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('min')}
=======
                className="w-11/12 lg:w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('min', { required: 'Ingrese un salario minimo' })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              />
              {errors.min && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese un salario minimo
                </span>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="max"
<<<<<<< HEAD
                className="font-quicksand-light w-1/2 font-semibold"
=======
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              >
                Salario maximo
              </label>
              <input
                type="number"
                name="max"
<<<<<<< HEAD
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('max')}
=======
                className="w-11/12 lg:w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('max', { required: 'Ingrese un salario maximo' })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              />
              {errors.max && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese un salario maximo
                </span>
              )}
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="cuerpo"
                className="font-quicksand-light w-full text-center font-semibold"
              >
                Cuerpo
              </label>
              <textarea
                name="cuerpo"
                className="h-72 w-full resize-none rounded-lg border-2 border-blue-whale p-2"
<<<<<<< HEAD
                {...register('cuerpo')}
=======
                {...register('cuerpo', {
                  required: 'Ingrese el cuerpo de la oferta',
                })}
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e
              ></textarea>
              {errors.cuerpo && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese el cuerpo de la oferta
                </span>
              )}
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
      </form>
    </div>
  )
}
