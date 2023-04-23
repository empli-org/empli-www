import { Link } from 'react-router-dom'

export const TalentCard = ({ talent }) => {
  const { id, name, lastname, image, verified, career, skills, contactInfo } =
    talent

  return (
    <div className="flex w-full items-center gap-2 rounded-md border border-green-500 bg-white p-6 shadow-lg hover:scale-105 hover:border-green-800">
      <img src={image} alt={name} className="h-36 w-24 object-cover" />
      <div className="ml-4 flex flex-grow flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="flex items-center gap-2 text-xl font-bold">
            <span>
              {name} {lastname}
            </span>
            {verified && <span className="h-4 w-4 rounded-full bg-cyan-600" />}
          </h1>
          <h2 className="text-slate-600">{career?.name}</h2>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 text-sm">
              <span className="text-slate-500">Location</span>
              <span className="font-bold text-slate-700">
                {contactInfo.location.city} - {contactInfo.location.country}
              </span>
            </h3>
            <h3 className="flex items-center gap-2 text-sm">
              <span>Experience</span>
              <span>3 years</span>
            </h3>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-between">
          <div>
            {skills?.map((s, idx) => (
              <span key={idx}>{s?.name}</span>
            ))}
          </div>
          <Link
            className="underline hover:text-green-500"
            to={`/talents/${id}`}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  )
}
