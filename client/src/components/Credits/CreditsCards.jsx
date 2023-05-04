// @ts-nocheck
import gh from './assets/gh.svg'
import lk from './assets/lk.svg'
import prog from './assets/prog.svg'
// import mail from './assets/mail.svg'

export default function CreditsCards(props) {
  const mailto = `mailto:${props.mail}`
  return (
    <div className="flex h-auto w-500 flex-col items-center gap-5 rounded-2xl bg-opacity">
      <img
        src={props.image}
        alt="profilePhoto"
        className="m-4 aspect-square w-32 rounded-full object-cover"
      />
      <div className="flex h-full w-full flex-col items-center gap-5 rounded-2xl bg-opacity2">
        <h1 className="mt-4 font-amenable text-2xl font-bold text-blue-whale">
          {props.name}
        </h1>
        <div className="flex w-full justify-around">
          <div className="flex items-center gap-1">
            <img src={prog} alt="prog" className="w-7" />
            <p className="font-quicksand text-lg font-medium text-blue-whale">
              {props.carrer}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img src={prog} alt="prog" className="w-7" />
            <p className="font-quicksand text-lg font-medium text-blue-whale">
              {props.location}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-around">
          <a
            href={props.github}
            target="_blank"
            className="hover:scale-110"
            rel="noreferrer"
          >
            <img src={gh} alt="github" className="w-16" />
            <p className="text-center text-lg font-medium text-blue-whale">
              GitHub
            </p>
          </a>
          <a
            href={props.linkedin}
            target="_blank"
            className="hover:scale-110"
            rel="noreferrer"
          >
            <img src={lk} alt="linkedin" className="w-16" />
            <p className="text-center text-lg font-medium text-blue-whale">
              Linkedin
            </p>
          </a>
        </div>
        <div className="mb-5 flex w-full justify-center">
          <a href={mailto}>
            <button className="h-10 w-24 rounded-2xl bg-blue-whale font-quicksand font-bold text-hint-of-red">
              Contactar
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
