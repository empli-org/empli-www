import { Link } from 'react-router-dom'

export const JobCard = ({ job }) => {
  const {
    title,
    area,
    type,
    code,
    description,
    location,
    company,
    minRate,
    maxRate,
  } = job
  return (
    <div className="rounded-md bg-white p-4 shadow-lg">
      <div className="aspect-video w-full bg-slate-300" />
      <div className="mt-2 flex items-center gap-2 text-xs font-medium">
        <span className="rounded-full bg-slate-200 px-3 py-2">{area}</span>
        <span className="rounded-full bg-teal-200 px-3 py-2">{type}</span>
      </div>
      <h1 className="mt-2 text-xl font-bold">{title}</h1>
      <h2 className="text-slate-600">{location.city}</h2>
      <p>
        ${minRate} / ${maxRate}
      </p>
      <p>{company.name}</p>
      <p className="line-clamp-2 text-lg font-light text-slate-600">
        {description}
      </p>
      <Link className="underline" to={`/offers/${code}`}>
        Ver detalle
      </Link>
    </div>
  )
}
