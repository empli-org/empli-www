import { useGetTalentQuery } from '@/redux/features/api/talent/talentApi'
import { useState } from 'react'
import {
  Container,
  CareerSearch,
  TalentCard,
  SimplePagination,
  CloseIcon,
  TalentsFallback,
} from 'components'

export const Talents = () => {
  const [page, setPage] = useState(1)
  const [key, setKey] = useState('')
  const { data, isLoading, isSuccess } = useGetTalentQuery({ page, key })
  const talents = data?.data
  const countTalents = data?.count
  const totalPages = Math.ceil(countTalents / 10)
  const loading = isLoading || isSuccess

  return (
    <div>
      <Container>
        <div className="mt-8 py-6">
          <h1 className="text-center text-2xl font-bold md:text-4xl">
            Encuentra los mejores profesionales en nuestra plataforma
          </h1>
        </div>
        <header className="flex items-center justify-between py-4">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg bg-slate-100 px-2 py-4 sm:p-8">
            <div className="flex w-full items-center justify-between gap-4" />
            <CareerSearch
              onSelect={item => setKey(item.name)}
              onEnter={val => setKey(val)}
            />
            {key && (
              <div className="flex items-center justify-center">
                <h1 className="flex items-center gap-2">
                  {countTalents} results for{' '}
                  <span className="font-bold">{`"${key}"`}</span>
                  <button onClick={() => setKey('')}>
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </h1>
              </div>
            )}
          </div>
        </header>

        {(!countTalents || countTalents === 0) && !loading && (
          <div className="py-12">
            <h1 className="text-center text-2xl font-bold text-slate-500 sm:text-4xl">
              Aún no tenemos nada por aquí!!
            </h1>
          </div>
        )}

        {loading && <TalentsFallback />}

        <div className="grid grid-cols-listing gap-4 py-4">
          {!loading && talents?.map(t => <TalentCard talent={t} key={t.id} />)}
        </div>

        <SimplePagination
          totalPages={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </Container>
    </div>
  )
}
