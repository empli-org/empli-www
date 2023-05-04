import { useGetJobByCodeQuery } from '@/redux/features/api/jobs/jobApi'
import { useNavigate, useParams } from 'react-router-dom'
import { marked } from 'marked'
import FormJobs from '@/components/Forms/FormJobs'
import { MapIcon } from '@/components/icons/MapPinIcon'

export const OfferDetail = () => {
  const { code } = useParams()
  const navigate = useNavigate()
  const { data: detail, isLoading } = useGetJobByCodeQuery(code)

  const scroll = () => {
    const section = document.querySelector('#apply-form')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (isLoading)
    return (
      <div>
        <strong className="p-10 text-blue-whale">Loading...</strong>
        <div
          className="ml-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    )

  if (!detail) return new Response('', { status: 404 })

  const body = marked(detail?.body)

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="h-64 w-full bg-slate-300" />
      <div className="mx-auto max-w-screen-lg -translate-y-12 bg-white px-4 py-12 shadow md:px-6">
        <div className="py-6">
          <button
            className="rounded-lg bg-slate-800 px-4 py-3 text-sm text-white"
            onClick={() => navigate(-1)}
          >
            Atrás
          </button>
        </div>
        <header className="mb-4 justify-between md:flex">
          <div className="mb-4">
            <h1 className="font-amenable text-2xl font-bold text-slate-600">
              {detail.title}
            </h1>
            <h3 className="flex items-center gap-2 font-quicksand text-lg">
              <MapIcon />
              <span>
                {detail.location.city} - {detail.location.country}
              </span>
            </h3>
          </div>
          <div>
            <button
              onClick={() => scroll()}
              className="w-full border-2 border-red-300 px-6 py-4 text-red-600"
            >
              Aplicar ahora
            </button>
          </div>
        </header>
        <section className="mt-4 py-6 font-quicksand">
          <h1 className="mb-4 text-lg font-medium">{detail.company.name}</h1>
          <div
            className="prose prose-ul:list-none prose-li:text-slate-800"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </section>
        <section className="flex flex-col gap-4 pb-24 pt-6 font-quicksand">
          <p>Años de experiencia requerida: {detail.requiredExp}</p>
          <p>
            Rango salarial: ${detail.minRate} - ${detail.maxRate}
          </p>
        </section>

        <section className="border-t py-8 pt-24">
          <div id="apply-form">
            <FormJobs onApply={() => {}} />
          </div>
        </section>
      </div>
    </div>
  )
}
