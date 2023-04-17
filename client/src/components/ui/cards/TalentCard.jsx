import { Link } from 'react-router-dom'

export default function TalentCard({ talent }) {
  const { id, name, lastname, image, verified, career, skills, contactInfo } =
    talent

  return (
    <div className="flex items-start gap-4 rounded-md bg-white p-4 shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-20 rounded-full grayscale filter"
      />
      <div className="flex flex-col">
        <div>
          <div>
            {skills?.map((s, idx) => (
              <span key={idx}>{s?.name}</span>
            ))}
          </div>
          <h1 className="mt-2 flex items-center gap-2 text-xl font-bold">
            <span>
              {name} {lastname}
            </span>
            {verified && <span className="h-4 w-4 rounded-full bg-cyan-600" />}
          </h1>
          <h2 className="text-slate-600">{career?.name}</h2>
          <div>
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
        <Link className="underline" to={`/talents/${id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  )
}
