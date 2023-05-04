// @ts-nocheck
import gh from './assets/gh.svg'
import lk from './assets/lk.svg'
import prog from './assets/prog.svg'
// import mail from './assets/mail.svg'

export default function CreditsCards(props) {
  const mailto = `mailto:${props.mail}`
  return (
    <div className="flex flex-col items-center w-500 h-auto rounded-2xl gap-5 bg-opacity">
      <img
        src={props.image}
        alt="profilePhoto"
        className="w-52 h-52 m-4 rounded-full"
      />
      <div className="w-full h-full bg-opacity2 flex flex-col items-center gap-5 rounded-2xl">
        <h1 className="font-amenable text-2xl text-blue-whale font-bold mt-4">
          {props.name}
        </h1>
        <div className="flex w-full justify-around">
          <div className="flex gap-1 items-center">
            <img src={prog} alt="prog" className="w-7" />
            <p className="font-quicksand text-lg font-medium text-blue-whale">
              {props.carrer}
            </p>
          </div>
          <div className="flex gap-1 items-center">
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
        <div className="flex w-full justify-center mb-5">
          <a href={mailto}>
            <button className="bg-blue-whale w-24 h-10 font-quicksand font-bold rounded-2xl text-hint-of-red">
              Contactar
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
