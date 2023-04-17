import { useState } from 'react'
import ComboBox from '@/components/ui/ComboBox'
import { useSearchJobsQuery } from '@/redux/features/api/base'

export default function JobSearch({ onSelect }) {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useSearchJobsQuery(query)

  return (
    <ComboBox
      placeholder="Search..."
      query={query}
      setQuery={setQuery}
      data={data}
      isFetching={isFetching}
      onSelect={onSelect}
      itemTitle="title"
      itemSubtitle="company"
    />
  )
}
