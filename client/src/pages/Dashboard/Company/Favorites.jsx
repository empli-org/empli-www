import { Container } from '@/components'
import { SelectBox } from '@/components/ui/Select'
import { experienceSortOptions, locationFilterOptions } from '@/utils/data'
import { useState } from 'react'

export default function FavedTalents() {
  const [verified, setVerified] = useState(false)
  const [experienceSort, setExperienceSort] = useState(experienceSortOptions[0])
  const [locationFilter, setLocationFilter] = useState(locationFilterOptions[0])

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
          <h1 className="mt-8 text-xl font-medium text-slate-500">
            No tienes talentos favoritos aún.
          </h1>
        </div>
      </Container>
    </div>
  )
}
