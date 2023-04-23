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
    <div className=" m-4 flex w-full flex-row rounded-md border border-green-500 bg-white p-4 shadow-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:border-green-800">
      <div className="aspect-video w-1/2 bg-slate-300" />
      <div className="ml-4 flex-1">
        <div className="flex items-center gap-2 text-xs font-medium">
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
    </div>
  )
}
