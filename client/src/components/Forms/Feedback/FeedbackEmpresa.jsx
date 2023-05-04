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
    MySwal.fire('Gracias!', 'Su opinion nos ayuda mucho', 'success')
    document.getElementById('form').reset()
    console.log(data)
  }

  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <h1 className="text-center font-amenable text-5xl font-bold text-blue-whale">
          Feedback
        </h1>
        <p className="text font-quicksand text-2xl font-semibold text-blue-whale">
          Nos gustaria que respondan las preguntas, nos ayuda mucho a crecer
        </p>
      </div>
      <form
        className="mt-20 flex w-full flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <div className="flex w-3/4 flex-col items-center justify-evenly rounded-2xl bg-hint-of-red p-7 shadow-lg">
          <h1 className="text-center font-amenable text-2xl font-semibold text-blue-whale">
            ¿Qué le parece nuestra plataforma de empleos?
          </h1>
          <div className="mt-7 flex w-full flex-col items-start gap-3">
            <div className="flex gap-1">
              <input
                type="radio"
                value="Muy mala"
                name="emp1"
                {...register('emp1', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp1"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Muy mala
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Mala"
                name="emp1"
                {...register('emp1', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp1"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Mala
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Regular"
                name="emp1"
                {...register('emp1', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp1"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Regular
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Buena"
                name="emp1"
                {...register('emp1', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp1"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Buena
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Muy buena"
                name="emp1"
                {...register('emp1', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp1"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Muy buena
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Excelente"
                name="emp1"
                {...register('emp1', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp1"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Excelente
              </label>
            </div>
            {errors.emp1 && (
              <span className="font-quicksand font-bold text-red-600">
                Seleccione una opción
              </span>
            )}
          </div>

          <h1 className="mt-10 text-center font-amenable text-2xl font-semibold text-blue-whale">
            ¿Cuáles fueron los principales motivos que llevaron a la empresa a
            rechazar la postulación?
          </h1>
          <div className="mt-7 flex w-full flex-col items-start gap-3">
            <div className="flex gap-1">
              <input
                type="radio"
                value="No se cumplían los requisitos del trabajo."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No se cumplían los requisitos del trabajo.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="El perfil del candidato no se ajustaba a las necesidades de la empresa."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                El perfil del candidato no se ajustaba a las necesidades de la
                empresa.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="El profesional no tenía suficiente experiencia para el puesto."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                El profesional no tenía suficiente experiencia para el puesto.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Hubo otros candidatos que tenían mejores habilidades o experiencia para el trabajo."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Hubo otros candidatos que tenían mejores habilidades o
                experiencia para el trabajo.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="La información presentada en el currículum o en la entrevista no fue suficientemente clara o convincente."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                La información presentada en el currículum o en la entrevista no
                fue suficientemente clara o convincente.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No se ajustaba al presupuesto o a la disponibilidad de tiempo de la empresa."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No se ajustaba al presupuesto o a la disponibilidad de tiempo de
                la empresa.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No se pudo verificar la información presentada en el currículum o en la entrevista."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No se pudo verificar la información presentada en el currículum
                o en la entrevista.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No se presentó información de referencia."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No se presentó información de referencia.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No se puede especificar un motivo en particular."
                name="emp2"
                {...register('emp2', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp2"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No se puede especificar un motivo en particular.
              </label>
            </div>
            {errors.emp2 && (
              <span className="font-quicksand font-bold text-red-600">
                Seleccione una opción
              </span>
            )}
          </div>
          <h1 className="mt-10 text-center font-amenable text-2xl font-semibold text-blue-whale">
            ¿Consideraría volver a postularse en el futuro para este empleo o
            para otros trabajos en nuestra plataforma?
          </h1>
          <div className="mt-7 flex w-full flex-col items-start gap-3">
            <div className="flex gap-1">
              <input
                type="radio"
                value="Definitivamente sí, ha sido una buena experiencia."
                name="emp3"
                {...register('emp3', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp3"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Definitivamente sí, ha sido una buena experiencia.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Sí, pero con algunas mejoras en la plataforma."
                name="emp3"
                {...register('emp3', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp3"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Sí, pero con algunas mejoras en la plataforma.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="No estoy seguro, me gustaría explorar otras opciones antes de tomar una decisión."
                name="emp3"
                {...register('emp3', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp3"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                No estoy seguro, me gustaría explorar otras opciones antes de
                tomar una decisión.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Probablemente no, no ha cumplido mis expectativas."
                name="emp3"
                {...register('emp3', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp3"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Probablemente no, no ha cumplido mis expectativas.
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                value="Definitivamente no, he tenido una mala experiencia usando la plataforma."
                name="emp3"
                {...register('emp3', { required: 'Seleccione una opción' })}
              />
              <label
                htmlFor="emp3"
                className="font-quicksand text-lg font-semibold text-blue-whale"
              >
                Definitivamente no, he tenido una mala experiencia usando la
                plataforma.
              </label>
            </div>
            {errors.emp3 && (
              <span className="font-quicksand font-bold text-red-600">
                Seleccione una opción
              </span>
            )}
          </div>
          <div className="flex w-full items-center justify-center">
            <button
              type="submit"
              className="my-8 h-12 w-2/6 rounded-xl bg-blue-font font-amenable text-white-font shadow-lg shadow-gray-900"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
