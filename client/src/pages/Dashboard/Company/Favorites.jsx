import { Container, TalentCard, TalentsFallback } from '@/components'
import { SelectBox } from '@/components/ui/Select'
import { useAccountContext } from '@/pages/Account/AccountContext'
import { useGetFavsProfilesQuery } from '@/redux/features/api/base'
import { experienceSortOptions, locationFilterOptions } from '@/utils/data'
import { useState } from 'react'

export default function FavedTalents() {
  const [verified, setVerified] = useState(false)
  const [experienceSort, setExperienceSort] = useState(experienceSortOptions[0])
  const [locationFilter, setLocationFilter] = useState(locationFilterOptions[0])
  const { account } = useAccountContext()
  const { data, isLoading, isFetching } = useGetFavsProfilesQuery({
    userId: account.id,
    queryString: '',
  })
  const favs = data?.favorites
  const loading = isLoading || isFetching

  return (
    <div>
      <Container>
        <header className="flex flex-col gap-4 py-8">
          <div className="flex flex-wrap items-center gap-4">
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
        <div>
          {loading && <TalentsFallback />}

          {!loading && data?.length === 0 ? (
            <h1 className="mt-8 text-xl font-medium text-slate-500">
              No tienes talentos favoritos aún.
            </h1>
          ) : (
            <div className="grid grid-cols-listing gap-4 py-4">
              {favs?.map(t => (
                <TalentCard talent={t} key={t.id} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
