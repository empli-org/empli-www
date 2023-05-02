import { inputCls } from './inputCls'

export function ContactInfo() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Correo"
          id="email"
          name="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="website">Portfolio</label>
        <input
          className={inputCls}
          type="text"
          placeholder="website"
          id="website"
          name="website"
        />
      </div>
    </>
  )
}
