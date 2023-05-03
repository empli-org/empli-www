import { useGetTalentQuery } from '@/redux/features/api/talent/talentApi'
import { useEffect, useState } from 'react'
import {
  Container,
  CareerSearch,
  TalentCard,
  SimplePagination,
  CloseIcon,
  TalentsFallback,
} from 'components'
import { SelectBox } from '@/components/ui/Select'
import {
  experienceSortOptions,
  locationFilterOptions,
  queryStringFromObj,
} from '@/utils/data'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const MarketProfessionals = () => {
  const [page, setPage] = useState(1)
  const [key, setKey] = useState('')
  const [verified, setVerified] = useLocalStorage('show-verified', false)
  const [experienceSort, setExperienceSort] = useLocalStorage(
    'exp-sort',
    experienceSortOptions[0],
  )
  const [locationFilter, setLocationFilter] = useLocalStorage(
    'loc-filter',
    locationFilterOptions[0],
  )
  const queryString = queryStringFromObj({
    exp: experienceSort.value,
    verified: verified ? 'true' : 'false',
    page,
    key,
    location: locationFilter.value === 'all' ? null : locationFilter.value,
  })
  const { data, isLoading, isSuccess } = useGetTalentQuery({
    page,
    key,
    verified,
    queryString,
  })
  const talents = data?.data
  const countTalents = data?.count
  const totalPages = Math.ceil(countTalents / 10)
  const loading = isLoading || isSuccess

  useEffect(() => {
    setPage(1)
  }, [key])

  return (
    <div>
      <Container>
        <header className="flex flex-col gap-4 py-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg lg:w-1/2">
              <CareerSearch
                onSelect={item => setKey(item.name)}
                onEnter={val => setKey(val)}
              />
              {key && (
                <div className="flex items-center">
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

            <div className="flex items-center gap-2">
              <input
                className="accent-blue-whale"
                disabled={false}
                type="checkbox"
                defaultChecked={verified}
                onChange={() => setVerified(!verified)}
                name="verified"
                id="verified"
              />
              <label htmlFor="verified" className="whitespace-nowrap">
                Solo verificados
              </label>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap">
            <SelectBox
              setSelected={setExperienceSort}
              options={experienceSortOptions}
              selected={experienceSort}
            />
            <SelectBox
              setSelected={setLocationFilter}
              options={locationFilterOptions}
              selected={locationFilter}
            />
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
