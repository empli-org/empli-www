import Container from '@/components/ui/Container'
import { useGetTalentByIdQuery } from '@/redux/features/api/base'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'

export default function TalentDetail() {
  const { id } = useParams()
  const { data, isLoading, isFetching } = useGetTalentByIdQuery(id)
  const loading = isLoading || isFetching

  if (loading) return <p>Loading...</p>

  if (!data) return new Response('', { status: 404 })

  return (
    <div>
      <Container>
        <div className="py-16">
          {data.image ? (
            <div
              className={clsx(
                'inline-flex rounded-full ring-2 ring-offset-4',
                data.verified ? 'ring-cyan-700' : 'ring-slate-300',
              )}
            >
              <img
                className="w-32 rounded-full object-center grayscale filter"
                src={data.image}
                alt={data.name}
              />
            </div>
          ) : (
            <div className="w-32 rounded-full object-center ring-2 ring-offset-4 grayscale filter" />
          )}
          <div className="py-4">
            <span className="text-lg font-bold">#{data.tuitionNumber}</span>
            <h1 className="flex items-center gap-4 text-2xl font-bold sm:text-4xl">
              <span>
                {data.name} {data.lastname}
              </span>
              {data.verified && (
                <span className="h-4 w-4 rounded-full bg-blue-600" />
              )}
            </h1>
            <h2 className="text-lg font-bold text-slate-600">
              {data.career.name}
            </h2>
          </div>
          <div>
            <h1 className="text-lg font-bold">Skills</h1>
            <ul className="flex items-center gap-4 py-2">
              <li className="rounded-full bg-slate-300 px-4 py-3 text-sm">
                Lorem
              </li>
              {data.skills?.map((skill, idx) => (
                <li
                  className="rounded-full bg-slate-300 px-4 py-3 text-sm"
                  key={idx}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-lg font-bold">Bio</h1>
            <p>
              Donec consequat nec ante eu suscipit. Fusce auctor ullamcorper
              enim, ac pulvinar velit commodo a. Integer laoreet lacinia ex,
              quis volutpat ante mollis sit amet. Donec porttitor dolor in diam
              rhoncus, eget pretium turpis ornare. Ut at nulla aliquet,
              dignissim lectus fringilla, bibendum ante. Proin feugiat varius
              ex, sed dignissim augue maximus eu. Duis eleifend eu mauris quis
              porttitor. Aenean porta enim urna, id interdum massa ultrices ut.
              Nulla eu quam vulputate, vehicula nisl a, accumsan elit.
              Suspendisse luctus magna in risus ullamcorper, non faucibus neque
              lacinia.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Proyectos</h1>
            <div className="grid grid-cols-listing py-4">
              {data.experienceInfo.projects?.map(p => (
                <div key={p.id} className="rounded-lg bg-white p-4">
                  <h1 className="mb-2 font-bold">{p.name}</h1>
                  <p className="line-clamp-2 py-2">{p.description}</p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Start</span>
                    <span>{p.startDate}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold">End</span>
                    <span>{p.endDate}</span>
                  </p>
                  <p>
                    <span className="font-bold">Estado: </span>
                    <span>{p.verified ? 'Verificado' : 'Pendiente'}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Contacto</h1>
            <p>Social links TODO</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
