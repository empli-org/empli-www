import { VerifiedIcon } from '@/components/icons/VerifiedIcon'
import { Link } from 'react-router-dom'

export const TalentCard = ({ talent }) => {
  const { id, name, lastname, image, career, skills, contactInfo, verified } =
    talent
  return (
    <div className="group box-border flex w-full items-center gap-2 rounded-md  bg-white p-6 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-24 self-start rounded-full object-cover grayscale transition group-hover:grayscale-0"
      />
      <div className="ml-4 flex flex-grow flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="flex items-center gap-2 text-xl font-bold">
            <span>
              {name} {lastname}
            </span>
            <VerifiedIcon verified={verified} />
          </h1>
          <h2 className="text-slate-600">{career?.name}</h2>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 text-sm">
              <span className="text-slate-500">Location</span>
              <span className="font-bold text-slate-700">
                {contactInfo ? (
                  <>
                    {contactInfo.location.city} - {contactInfo.location.country}
                  </>
                ) : (
                  <>-</>
                )}
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
              <span
                key={idx}
                className="rounded-lg bg-hint-of-red p-2 text-xs text-gray-600"
              >
                {s?.name}
              </span>
            ))}
          </div>
          <Link
            className="underline hover:text-gulf-stream"
            to={`/talents/${id}`}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  )
}
