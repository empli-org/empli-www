import { inputCls } from './UserForm'

export function InfoForm() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Nombre</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Nombre"
          id="name"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastname">Apellido</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Apellido"
          id="lastname"
          name="lastname"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Edad</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Edad"
          id="age"
          name="age"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="career">Carrera</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Carrera"
          id="career"
          name="career"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="tuition">Colegiatura</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Numero colegiatura"
          id="tuition"
          name="tuition"
        />
      </div>
    </div>
  )
}
