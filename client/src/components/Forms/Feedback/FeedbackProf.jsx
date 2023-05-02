// @ts-nocheck
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function FeedbackProf() {
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
      <div className="w-full flex flex-col items-center">
        <h1 className="font-amenable text-5xl font-bold text-center text-blue-whale">
          Feedback
        </h1>
        <p className="font-quicksand text-2xl text font-semibold text-blue-whale">
          Nos gustaria que respondan las preguntas, nos ayuda mucho a crecer
        </p>
      </div>
      <form
        className="w-full flex flex-col items-center justify-center mt-20"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <div className="w-3/4 flex flex-col items-center justify-evenly p-7 bg-hint-of-red rounded-2xl shadow-lg">
          <h1 className="font-amenable text-2xl font-semibold text-center text-blue-whale">
            ¿Qué le parece nuestra plataforma de empleos?
          </h1>
          <div className="flex flex-col items-start w-full gap-3 mt-7">
            <div className="flex gap-1">
              <input
                type="radio"
                value="Muy mala"
                name="cero"
                {...register('cero', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cero"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Muy mala
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Mala"
                name="cero"
                {...register('cero', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cero"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Mala
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Regular"
                name="cero"
                {...register('cero', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cero"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Regular
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Buena"
                name="cero"
                {...register('cero', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cero"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Buena
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Muy buena"
                name="cero"
                {...register('cero', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cero"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Muy buena
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Excelente"
                name="cero"
                {...register('cero', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cero"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Excelente
              </label>
            </div>
            {errors.cero && (
              <span className="font-quicksand font-bold text-red-600">
                Seleccione una opción
              </span>
            )}
          </div>

          <h1 className="font-amenable text-2xl font-semibold text-center text-blue-whale mt-10">
            ¿Por qué decidió retirar su postulación para este empleo?
          </h1>
          <div className="flex flex-col items-start w-full gap-3 mt-7">
            <div className="flex gap-1">
              <input
                type="radio"
                value="Encontré otra oportunidad laboral que se ajustaba mejor a mis
                habilidades y experiencia."
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="uno"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Encontré otra oportunidad laboral que se ajustaba mejor a mis
                habilidades y experiencia.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Cambié de opinión acerca de la empresa o el trabajo después de
                investigar un poco más."
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="dos"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Cambié de opinión acerca de la empresa o el trabajo después de
                investigar un poco más.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Descubrí que los requisitos del trabajo no se ajustaban a mi."
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="tres"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Descubrí que los requisitos del trabajo no se ajustaban a mi.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Decidí tomarme un tiempo para considerar otras opciones antes de
                tomar una decisión final."
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cuatro"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Decidí tomarme un tiempo para considerar otras opciones antes de
                tomar una decisión final.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Tuve un problema técnico o de otra índole que me impidió
                completar la postulación o continuar con el proceso de
                selección."
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="cinco"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Tuve un problema técnico o de otra índole que me impidió
                completar la postulación o continuar con el proceso de
                selección.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Encontré información que no estaba disponible en el momento de
                postularme que hizo que retirara mi postulación."
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="seis"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Encontré información que no estaba disponible en el momento de
                postularme que hizo que retirara mi postulación.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Otro motivo"
                name="uno"
                {...register('uno', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="otro"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Otro motivo:
              </label>
            </div>
            {errors.uno && (
              <span className="font-quicksand font-bold text-red-600">
                Seleccione una opción
              </span>
            )}
          </div>
          <h1 className="font-amenable text-2xl font-semibold text-center text-blue-whale mt-10">
            ¿Consideraría volver a postularse en el futuro para este empleo o
            para otros trabajos en nuestra plataforma?
          </h1>
          <div className="flex flex-col items-start w-full gap-3 mt-7">
            <div className="flex gap-1">
              <input
                type="radio"
                value="Sí, definitivamente consideraría volver a postularme en el
                futuro."
                name="dos"
                {...register('dos', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="dos"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Sí, definitivamente consideraría volver a postularme en el
                futuro.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Quizás, dependería de los requisitos específicos del trabajo y
                de las condiciones laborales."
                name="dos"
                {...register('dos', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="dos"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Quizás, dependería de los requisitos específicos del trabajo y
                de las condiciones laborales.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No, no volvería a postularme para este empleo o para otros
                trabajos en su plataforma."
                name="dos"
                {...register('dos', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="dos"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No, no volvería a postularme para este empleo o para otros
                trabajos en su plataforma.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No lo sé, dependería de los cambios o mejoras que se realicen en
                la plataforma."
                name="dos"
                {...register('dos', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="dos"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No lo sé, dependería de los cambios o mejoras que se realicen en
                la plataforma.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No estoy seguro/a en este momento."
                name="dos"
                {...register('dos', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="dos"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No estoy seguro/a en este momento.
              </label>
            </div>
            {errors.dos && (
              <span className="font-quicksand font-bold text-red-600">
                Seleccione una opción
              </span>
            )}
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
