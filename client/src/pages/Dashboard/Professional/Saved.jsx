import { Container, JobsFallback } from '@/components'
import { SelectBox } from '@/components/ui/Select'
import { JobCard } from '@/components/ui/cards/JobCard_v2'
import { useAccountContext } from '@/pages/Account/AccountContext'
import { useGetSavedOffersQuery } from '@/redux/features/api/base'
import { useState } from 'react'

const dateSortOptions = [
  { label: 'Recientes', value: 'asc' },
  { label: 'Mas antiguos', value: 'desc' },
]

const locationFilterOptions = [
  { label: 'Todos', value: 'all' },
  { label: 'Lima', value: 'lima' },
  { label: 'Trujillo', value: 'trujillo' },
  { label: 'Arequipa', value: 'arequipa' },
  { label: 'Machala', value: 'machala' },
  { label: 'Fortaleza', value: 'fortaleza' },
]

const queryStringFromObj = obj =>
  Object.keys(obj)
    .map(key => obj[key] && key + '=' + obj[key])
    .join('&')

export const SavedOffers = () => {
  const [dateSort, setDateSort] = useState(dateSortOptions[0])
  const [locationFilter, setLocationFilter] = useState(locationFilterOptions[0])
  const queryString = queryStringFromObj({
    date: dateSort.value,
    location: locationFilter.value,
  })
  const { account } = useAccountContext()
  const { data, isLoading, isFetching } = useGetSavedOffersQuery({
    userId: account.id,
    queryString,
  })
  const loading = isLoading || isFetching
  const offers = data?.saved

  return (
    <div className="">
      <Container>
        <header className="flex items-center gap-4 py-6">
          <SelectBox
            selected={dateSort}
            setSelected={setDateSort}
            options={dateSortOptions}
            label="Ordenar por"
          />
          <SelectBox
            selected={locationFilter}
            setSelected={setLocationFilter}
            options={locationFilterOptions}
            label="Ubicación"
          />
        </header>
        {loading && <JobsFallback />}
        <section className="grid grid-cols-listing gap-4 py-4">
          {!loading &&
            offers?.map(offer => <JobCard key={offer.id} job={offer} />)}
        </section>
      </Container>
    </div>
  )
}
