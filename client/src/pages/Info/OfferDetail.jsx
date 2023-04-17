import { useGetJobByCodeQuery } from '@/redux/features/api/base'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'

export const OfferDetail = () => {
  const { code } = useParams()
  const { data: detail, isLoading } = useGetJobByCodeQuery(code)
  const body = marked(detail?.body)
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="h-64 w-full bg-slate-300" />
      <div className="mx-auto max-w-screen-lg -translate-y-12 bg-white px-4 py-12 shadow md:px-6">
        <header className="mb-4 justify-between md:flex">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">{detail.title}</h1>
            <h2>Location</h2>
            <h3>
              {detail.location.city} - {detail.location.country}
            </h3>
          </div>
          <div>
            <button className="w-full border-2 border-red-300 px-6 py-4 text-red-600">
              Apply Now
            </button>
          </div>
        </header>
        <section className="mt-4">
          <h1 className="mb-4 font-bold">{detail.company.name}</h1>
          <div
            className="prose prose-ul:list-none prose-li:text-slate-800"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </section>
        <section className="flex flex-col gap-4 py-6">
          <p>Years of experience required: {detail.requiredExp}</p>
          <p>
            Salary range: ${detail.minRate} - ${detail.maxRate}
          </p>
        </section>
      </div>
    </div>
  )
}
