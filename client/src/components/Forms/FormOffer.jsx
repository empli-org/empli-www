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
      <h1 className="text-center text-5xl font-amenable font-normal mt-10 mb-4 text-blue-whale">
        crear oferta
      </h1>
      <form
        className="flex w-full justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <div className="w-3/5 flex flex-col justify-center items-center gap-5 p-5 bg-hint-of-red shadow-xl rounded-3xl">
          <div className="w-full flex justify-around">
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="ID"
                className="w-3/4 font-quicksand-light font-semibold"
              >
                ID del trabajo
              </label>
              <input
                type="text"
                name="ID"
                className="w-3/4 p-2 rounded-lg border-2 border-blue-whale"
                {...register('ID')}
              />
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="titulo"
                className="w-3/4 font-quicksand-light font-semibold"
              >
                Titulo
              </label>
              <input
                type="text"
                name="titulo"
                className="w-3/4 p-2 rounded-lg border-2 border-blue-whale"
                {...register('titulo')}
              />
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="descripcion"
                className="w-3/4 font-quicksand-light font-semibold"
              >
                Descripcion
              </label>
              <textarea
                name="descripcion"
                className="w-3/4 h-24 resize-none p-2 rounded-lg border-2 border-blue-whale"
                {...register('descripcion')}
              ></textarea>
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="experiencia"
                className="w-3/4 font-quicksand-light font-semibold"
              >
                Experiencia requerida
              </label>
              <textarea
                name="experiencia"
                className="w-3/4 h-24 resize-none p-2 rounded-lg border-2 border-blue-whale"
                {...register('experiencia')}
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="area"
                className="w-1/2 font-quicksand-light font-semibold"
              >
                Area de trabajo
              </label>
              <select
                name="area"
                className="w-1/2 p-2 rounded-lg border-2 border-blue-whale"
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
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="lugar"
                className="w-1/2 font-quicksand-light font-semibold"
              >
                Lugar de trabajo
              </label>
              <select
                name="lugar"
                className="w-1/2 p-2 rounded-lg border-2 border-blue-whale"
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
          <div className="w-full flex justify-around">
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="min"
                className="w-1/2 font-quicksand-light font-semibold"
              >
                Salario minimo
              </label>
              <input
                type="number"
                name="min"
                className="w-1/2 p-2 rounded-lg border-2 border-blue-whale"
                {...register('min')}
              />
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="max"
                className="w-1/2 font-quicksand-light font-semibold"
              >
                Salario maximo
              </label>
              <input
                type="number"
                name="max"
                className="w-1/2 p-2 rounded-lg border-2 border-blue-whale"
                {...register('max')}
              />
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="flex flex-col w-full items-center justify-center gap-1">
              <label
                htmlFor="cuerpo"
                className="w-full text-center font-quicksand-light font-semibold"
              >
                Cuerpo
              </label>
              <textarea
                name="cuerpo"
                className="w-full h-72 resize-none p-2 rounded-lg border-2 border-blue-whale"
                {...register('cuerpo')}
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="my-8 h-12 w-2/6 rounded-xl font-amenable bg-blue-font text-white-font shadow-lg shadow-gray-900"
            >
              Publicar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
