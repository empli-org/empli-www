// @ts-nocheck
import { dataArea, dataLugar } from './data'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function FormOffer() {
  const { register, handleSubmit } = useForm()

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
        <div className="flex w-3/5 flex-col items-center justify-center gap-5 rounded-3xl bg-hint-of-red p-5 shadow-xl">
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="ID"
                className="font-quicksand-light w-3/4 font-semibold"
              >
                ID del trabajo
              </label>
              <input
                type="text"
                name="ID"
                className="w-3/4 rounded-lg border-2 border-blue-whale p-2"
                {...register('ID')}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="titulo"
                className="font-quicksand-light w-3/4 font-semibold"
              >
                Titulo
              </label>
              <input
                type="text"
                name="titulo"
                className="w-3/4 rounded-lg border-2 border-blue-whale p-2"
                {...register('titulo')}
              />
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="descripcion"
                className="font-quicksand-light w-3/4 font-semibold"
              >
                Descripcion
              </label>
              <textarea
                name="descripcion"
                className="h-24 w-3/4 resize-none rounded-lg border-2 border-blue-whale p-2"
                {...register('descripcion')}
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="experiencia"
                className="font-quicksand-light w-3/4 font-semibold"
              >
                Experiencia requerida
              </label>
              <textarea
                name="experiencia"
                className="h-24 w-3/4 resize-none rounded-lg border-2 border-blue-whale p-2"
                {...register('experiencia')}
              ></textarea>
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="area"
                className="font-quicksand-light w-1/2 font-semibold"
              >
                Area de trabajo
              </label>
              <select
                name="area"
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('area')}
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
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="lugar"
                className="font-quicksand-light w-1/2 font-semibold"
              >
                Lugar de trabajo
              </label>
              <select
                name="lugar"
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('lugar')}
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
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="min"
                className="font-quicksand-light w-1/2 font-semibold"
              >
                Salario minimo
              </label>
              <input
                type="number"
                name="min"
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('min')}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="max"
                className="font-quicksand-light w-1/2 font-semibold"
              >
                Salario maximo
              </label>
              <input
                type="number"
                name="max"
                className="w-1/2 rounded-lg border-2 border-blue-whale p-2"
                {...register('max')}
              />
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
                {...register('cuerpo')}
              ></textarea>
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
