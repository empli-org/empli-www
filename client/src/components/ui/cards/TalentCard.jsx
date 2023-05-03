import { BookmarkIcon } from '@/components/icons/BookmarkIcon'
import { VerifiedIcon } from '@/components/icons/VerifiedIcon'
import { useAccountContext } from '@/pages/Account/AccountContext'
import { useFavProfileMutation } from '@/redux/features/api/base'
import { Link } from 'react-router-dom'

export const TalentCard = ({ talent }) => {
  const { account } = useAccountContext()
  const { id, name, lastname, image, career, skills, contactInfo, verified } =
    talent
  const [favProfile, { isLoading, isFetching }] = useFavProfileMutation()
  const loading = isLoading || isFetching

  return (
    <div className="group relative box-border flex w-full items-center gap-2 rounded-md  bg-white p-6 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <button
        disabled={loading}
        className="absolute bottom-6 left-8"
        onClick={() =>
          favProfile({
            userId: account.id,
            talentId: id,
          })
        }
      >
        <BookmarkIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
      </button>
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
          <h2 className="line-clamp-1 text-slate-600">{career?.name}</h2>
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
            className="text-sm text-gray-500 underline hover:text-gulf-stream group-hover:text-gray-700"
            to={`/talents/${id}`}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  )
}
