export const ProfessionalDash = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Inicio</h1>
      <div className="flex items-center gap-4 py-4">
        <div className="rounded-lg bg-slate-100 px-4 py-6">
          <h1 className="text-lg font-medium">Mis postulaciones</h1>
          <div className="pt-4">
            <span className="text-xl">3</span>
          </div>
        </div>
        <div className="rounded-lg bg-slate-100 px-4 py-6">
          <h1 className="text-lg font-medium">Visitas a mi perfil</h1>
          <div className="pt-4">
            <span className="text-xl">12</span>
          </div>
        </div>
      </div>
    </div>
  )
}
