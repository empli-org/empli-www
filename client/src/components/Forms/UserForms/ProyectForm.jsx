import { CloseIcon } from 'components'
import { inputCls } from './inputCls'

export function ProyectForm({ i, removeProject, handleChange }) {
  const id = `pname-${i}`
  return (
    <div className="relative rounded-lg bg-slate-100 p-6 pt-8">
      <button
        onClick={() => removeProject(i)}
        type="button"
        className="absolute right-4 top-4"
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col">
        <label htmlFor={id}>Nombre</label>
        <input
          className={inputCls}
          onChange={handleChange}
          type="text"
          placeholder="Nombre del proyecto"
          name={id}
          id={id}
        />
      </div>
    </div>
  )
}
