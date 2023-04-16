import { useGetJobLocationsQuery } from '@/redux/features/api/jobs'
import { useState } from 'react'
import ComboBox from '@/components/ui/ComboBox'

export default function LocationSearch() {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useGetJobLocationsQuery(query)

  return (
    <ComboBox
      label="Ubicación"
      placeholder="Ubicación..."
      query={query}
      setQuery={setQuery}
      data={data}
      isFetching={isFetching}
      itemTitle="city"
      itemSubtitle="country"
    />
  )
}
