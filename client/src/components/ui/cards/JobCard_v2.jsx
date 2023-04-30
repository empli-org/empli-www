import { BiTimeFive } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import esStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import TimeAgo from 'react-timeago'
import { MapIcon } from '@/components/icons/MapPinIcon'
import { BookmarkIcon } from '@/components/icons/BookmarkIcon'
import { useSaveOfferMutation } from '@/redux/features/api/base'
import { useAccountContext } from '@/pages/Account/AccountContext'
import clsx from 'clsx'
import { LoaderIcon } from '@/components/icons/LoaderIcon'

const formatter = buildFormatter(esStrings)

export const JobCard = ({ job }) => {
  const {
    id,
    code,
    image,
    title,
    company,
    location,
    description,
    createdAt,
    savedBy,
  } = job
  const [saveOffer, { isLoading }] = useSaveOfferMutation()
  const { account } = useAccountContext()
  const isSaved = savedBy?.map(e => e.id).includes(account.id)

  const handleSave = () => {
    console.log(account.id)
    saveOffer({ userId: account.id, offerId: id })
  }

  return (
    <div className="flex-shrink-0 transform overflow-hidden rounded-lg bg-white shadow transition duration-300 ease-in-out hover:scale-105 hover:border-green-800">
      <div className="relative">
        <button
          disabled={isLoading}
          onClick={handleSave}
          className={clsx(
            `absolute right-3 top-3 rounded-md p-2.5 shadow hover:bg-slate-200 disabled:text-slate-300`,
            isSaved ? 'bg-lochinvar text-white' : 'bg-slate-100 text-slate-600',
          )}
        >
          {isLoading ? <LoaderIcon /> : <BookmarkIcon className="h-4 w-4" />}
        </button>
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-60 w-full object-scale-down object-center"
          />
        ) : (
          <div className="h-60 w-full bg-slate-200" />
        )}
      </div>
      <div className="border-t p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-500">{company.name}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-gray-500">
            <MapIcon className="h-4 w-4" />
          </span>
          <p className="text-gray-500">{location.city}</p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <BiTimeFive className="text-gray-400" />
          <p className="text-gray-500">
            <TimeAgo formatter={formatter} date={createdAt} />
          </p>
        </div>
        <p className="mt-4 text-gray-500">{description}</p>
        <Link
          to={`/offers/${code}`}
          className="mt-4 flex justify-center rounded bg-gulf-stream px-7 py-2 font-bold text-white hover:bg-lochinvar  active:bg-green-900"
        >
          Aplicar
        </Link>
      </div>
    </div>
  )
}
