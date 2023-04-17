import { useState } from 'react'
import ComboBox from '@/components/ui/ComboBox'
import { useSearchCareersQuery } from '@/redux/features/api/base'

export default function CareerSearch({ onSelect, onEnter }) {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useSearchCareersQuery(query)

  return (
    <ComboBox
      placeholder="Buscar por profesión o habilidad..."
      query={query}
      setQuery={setQuery}
      data={data}
      onSelect={onSelect}
      onEnter={onEnter}
      isFetching={isFetching}
      itemTitle="name"
    />
  )
}
