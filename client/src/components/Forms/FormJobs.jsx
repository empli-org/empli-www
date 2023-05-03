// @ts-nocheck
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function FormJobs() {
  const schema = yup.object({
    nombre: yup.string().required('Ingrese su nombre/s'),
    apellido: yup.string().required('Ingrese su apellido/s'),
    mail: yup
      .string()
      .required('Ingrese su mail')
      .matches(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        'Ingrese un mail valido',
      ),
    telefono: yup
      .string()
      .required('Ingrese su telefono')
      .matches(/^[0-9]+$/, 'Solo ingrese numeros'),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const MySwal = withReactContent(Swal)

  const onSubmit = data => {
    MySwal.fire('Listo!', 'Postulacion completada', 'success')
    document.getElementById('form').reset()
    console.log(data)
  }
  return (
    <div>
      <h1 className="font-amenable text-5xl font-bold text-center text-blue-whale">
        Postularse
      </h1>
      <form
        className="w-full flex flex-col items-center justify-center mt-10"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <div className="w-3/5 flex flex-col items-center justify-evenly p-7 bg-hint-of-red rounded-2xl shadow-lg gap-10">
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center w-full gap-1">
              <label
                htmlFor="name"
                className="w-3/5 font-quicksand text-lg font-semibold"
              >
                Nombre/s
              </label>
              <input
                type="text"
                name="name"
                className="w-3/5 border border-blue-whale rounded-xl p-2"
                {...register('nombre')}
              />
              {errors.nombre?.message && (
                // eslint-disable-next-line prettier/prettier
                <span className="w-3/5 text-red-600">
                  {errors.nombre.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center w-full gap-1">
              <label
                htmlFor="apellido"
                className="w-3/5 font-quicksand text-lg font-semibold"
              >
                Apellido/s
              </label>
              <input
                type="text"
                name="apellido"
                className="w-3/5 border border-blue-whale rounded-xl p-2"
                {...register('apellido')}
              />
              {errors.apellido?.message && (
                // eslint-disable-next-line prettier/prettier
                <span className="w-3/5 text-red-600">
                  {errors.apellido.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center w-full gap-1">
              <label
                htmlFor="email"
                className="w-3/5 font-quicksand text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-3/5 border border-blue-whale rounded-xl p-2"
                {...register('mail')}
              />
              {errors.mail?.message && (
                // eslint-disable-next-line prettier/prettier
                <span className="w-3/5 text-red-600">
                  {errors.mail.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center w-full gap-1">
              <label
                htmlFor="numero"
                className="w-3/5 font-quicksand text-lg font-semibold"
              >
                Numero de teléfono
              </label>
              <input
                type="text"
                name="numero"
                className="w-3/5 border border-blue-whale rounded-xl p-2"
                {...register('telefono')}
              />
              {errors.telefono?.message && (
                // eslint-disable-next-line prettier/prettier
                <span className="w-3/5 text-red-600">
                  {errors.telefono.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center w-full gap-1">
              <label
                htmlFor="cv"
                className="w-3/5 font-quicksand text-lg font-semibold"
              >
                Curriculum
              </label>
              <p className="w-3/5 font-quicksand font-medium">
                (.pdf, .doc, .docx)
              </p>
              <input
                type="file"
                name="cv"
                className="w-3/5"
                {...register('cv')}
              />
            </div>
            <div className="flex flex-col items-center w-full gap-1">
              <label
                htmlFor="adicional"
                className="w-3/5 font-quicksand text-lg font-semibold"
              >
                Archivos adicionales
              </label>
              <p className="w-3/5 font-quicksand font-medium">
                (.pdf, .doc, .docx, .txt, .jpeg, .gif, .png), max 30MB
              </p>
              <input
                type="file"
                name="adicional"
                className="w-3/5"
                {...register('adicional')}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="my-8 h-12 w-2/6 font-amenable rounded-xl bg-blue-font text-white-font shadow-lg shadow-gray-900"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
