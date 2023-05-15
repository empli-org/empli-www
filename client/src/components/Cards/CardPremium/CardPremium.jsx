import { Button } from '@/components/Button/Button'
import update from 'assets/blob/update.jpg'
export const CardPremium = () => {
  return (
    <>
      <div
        className="flex rounded-2xl "
        style={{
          background: `url(${update}) center no-repeat`,
          backgroundSize: 'contain',
          backgroundPosition: '50% top',
        }}
      >
        <div className="p-10 w-full  rounded-2xl  h-full">
          <h3 className="font-quicksand text-justify  pb-10 font-bold text-2xl">
            Potencia tu experiencia en Empli Marketplace y accede a beneficios
            exclusivos. Conviértete en usuario Premium y obtén acceso
            prioritario a empleos y proyectos destacados en el sector de la
            construcción. Únete hoy y lleva tu carrera al siguiente nivel con
            Empli
          </h3>
          <Button title="Unete ahora" />
        </div>
        <div className=""></div>
      </div>
    </>
  )
}
