import { useState } from 'react'
import { ComboBox } from 'components'
import { useSearchCareersQuery } from '@/redux/features/api/base'

export const CareerSearch = ({ onSelect, onEnter }) => {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useSearchCareersQuery(query)

  return (
    // @ts-ignore
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
