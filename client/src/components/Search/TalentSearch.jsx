import { useState } from 'react'
import ComboBox from '@/components/ui/ComboBox'
import { useSearchJobsQuery } from '@/redux/features/api/base'

export default function TalentSearch() {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useSearchJobsQuery(query)

  return (
    <ComboBox
      placeholder="Busca por profesion o habilidades..."
      query={query}
      setQuery={setQuery}
      data={data}
      isFetching={isFetching}
      itemTitle="name"
    />
  )
}
