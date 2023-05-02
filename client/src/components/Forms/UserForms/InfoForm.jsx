import { inputCls } from "./inputCls";

export function InfoForm({ name, career, tuitionNumber }) {
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
          defaultValue={name} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="career">Carrera</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Carrera"
          id="career"
          name="career"
          defaultValue={career?.name} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="tuition">Colegiatura</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Numero colegiatura"
          id="tuition"
          name="tuition"
          defaultValue={tuitionNumber} />
      </div>
    </div>
  );
}
