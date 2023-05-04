import CreditsCards from './CreditsCards'
import { data } from './data'

export default function Credits() {
  return (
    <div className="">
      <div className="flex justify-center items-center w-full h-20 bg-contact-img bg-cover">
        <h1 className="text-center text-4xl font-amenable font-bold text-blue-whale">
          Créditos
        </h1>
      </div>
      <p className="text-center text-2xl font-quicksand font-semibold text-blue-whale mt-15">
        Este marketplace de trabajo ha sido creado por un equipo de estudiantes
        de SoyHenry💛
      </p>
      <div className="flex justify-around flex-wrap gap-10 m-10 p-10">
        {data.map(data => {
          return (
            <CreditsCards
              key={data.id}
              image={data.image}
              name={data.name}
              carrer={data.carrer}
              location={data.location}
              github={data.github}
              linkedin={data.linkedin}
              mail={data.mail}
            />
          )
        })}
      </div>
    </div>
  )
}
