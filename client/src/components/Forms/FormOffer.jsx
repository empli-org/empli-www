// @ts-nocheck
import { useAccountContext } from '@/pages/Account/AccountContext'
import { dataArea, dataLugar } from './data'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from 'react'
import { useCreateJobOfferMutation } from '@/redux/features/api/company/companyApi'

const genRanHex = size =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')

export default function FormOffer() {
  const [hexCode, setHexCode] = useState(genRanHex(8))
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const { account } = useAccountContext()
  const [createOffer, { isLoading, isSuccess, isError }] =
    useCreateJobOfferMutation()

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (!isLoading && isSuccess) {
      MySwal.fire('Listo!', 'Publicacion realizada', 'success')
      document.getElementById('form').reset()
      setHexCode(genRanHex(8))
    }
    if (!isLoading && isError) {
      MySwal.fire('Error!', 'Ups no se pudo crear la oferta!', 'error')
      setHexCode(genRanHex(8))
    }
  }, [isSuccess, isLoading])

  const onSubmit = data => {
    const body = {
      code: data.codigo,
      title: data.titulo,
      body: data.cuerpo,
      requiredExp: Number(data.experiencia),
      description: data.descripcion,
      city: data.lugar,
      area: data.area,
      minRate: Number(data.min),
      maxRate: Number(data.max),
    }
    createOffer({ userId: account.id, ...body })
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
        <div className="m-5 flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-hint-of-red p-5 shadow-xl xl:m-0 xl:w-4/5 2xl:w-3/5">
          <div className="flex w-full flex-col justify-around gap-4 md:flex-row md:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="ID"
                className="font-quicksand-light w-11/12 font-semibold lg:w-3/4"
              >
                Código único
              </label>
              <input
                readOnly
                type="text"
                name="ID"
                value={hexCode}
                onChange={() => {}}
                className="w-11/12 rounded-lg border-2 border-blue-whale p-2 lg:w-3/4"
                {...register('codigo', { required: 'Ingrese un codigo' })}
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
                className="font-quicksand-light w-11/12 font-semibold lg:w-3/4"
              >
                Titulo
              </label>
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={true}
                type="text"
                name="titulo"
                className="w-11/12 rounded-lg border-2 border-blue-whale p-2 lg:w-3/4"
                {...register('titulo', { required: 'Ingrese un titulo' })}
              />
              {errors.titulo && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese un titulo
                </span>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col justify-around gap-5 lg:flex-row lg:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="descripcion"
                className="font-quicksand-light w-full font-semibold lg:w-3/4"
              >
                Descripcion
              </label>
              <textarea
                name="descripcion"
                className="h-48 w-full resize-none rounded-lg border-2 border-blue-whale p-2 lg:h-24 lg:w-3/4"
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
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="experiencia"
                className="font-quicksand-light w-full font-semibold lg:w-3/4"
              >
                Experiencia requerida(años)
              </label>
              <textarea
                name="experiencia"
                className="h-48 w-full resize-none rounded-lg border-2 border-blue-whale p-2 lg:h-24 lg:w-3/4"
                {...register('experiencia', {
                  required: 'Ingrese experiencia requerida',
                })}
              ></textarea>
              {errors.experiencia && (
                <span className="font-quicksand font-bold text-red-600">
                  Ingrese experiencia requerida
                </span>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col justify-around gap-4 sm:flex-row sm:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="area"
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
              >
                Area de trabajo
              </label>
              <select
                name="area"
                defaultValue="-1"
                className="w-11/12 rounded-lg border-2 border-blue-whale p-2 lg:w-1/2"
                {...register('area', { required: 'Seleccione un area' })}
              >
                <option value="-1" disabled>
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
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
              >
                Lugar de trabajo
              </label>
              <select
                name="lugar"

                defaultValue="-1"

                className="w-11/12 rounded-lg border-2 border-blue-whale p-2 lg:w-1/2"
                {...register('lugar', { required: 'Seleccione un lugar' })}
              >
                <option value="-1" disabled>
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
          <div className="flex w-full flex-col justify-around gap-4 sm:flex-row sm:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <label
                htmlFor="min"
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
              >
                Salario minimo
              </label>
              <input
                type="number"
                name="min"
                className="w-11/12 rounded-lg border-2 border-blue-whale p-2 lg:w-1/2"
                {...register('min', { required: 'Ingrese un salario minimo' })}
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
                className="font-quicksand-light w-11/12 font-semibold lg:w-1/2"
              >
                Salario maximo
              </label>
              <input
                type="number"
                name="max"
                className="w-11/12 rounded-lg border-2 border-blue-whale p-2 lg:w-1/2"
                {...register('max', { required: 'Ingrese un salario maximo' })}
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
                {...register('cuerpo', {
                  required: 'Ingrese el cuerpo de la oferta',
                })}
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
              disabled={isLoading}
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
