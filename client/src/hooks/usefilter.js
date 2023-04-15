import { useEffect, useState } from 'react'

// eslint-disable-next-line prettier/prettier
export const useFilter = users => {
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [searchQuery, setSearchQuery] = useState('')
  const [careerFilters, setCareesFilters] = useState([])
  const [skillFilters, setSkillFilters] = useState([])
  const [expTimeFilter, setExpTimeFilter] = useState(null)

  useEffect(() => {
    let filtered = users.filter(user => {
      if (
        searchQuery &&
        !user.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      if (
        careerFilters.length > 0 &&
        !careerFilters.every(career => user.career.includes(career))
      ) {
        return false
      }

      if (
        skillFilters.length > 0 &&
        !skillFilters.every(skill => user.skills.includes(skill))
      ) {
        return false
      }

      if (expTimeFilter && user.expTime < expTimeFilter) {
        return false
      }

      return true
    })

    setFilteredUsers(filtered)
  }, [users, searchQuery, careerFilters, skillFilters, expTimeFilter])

  const handleSearchChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleCareesFilterChange = e => {
    setCareesFilters([e.target.value])
  }

  const handleSkillFilterChange = e => {
    setSkillFilters([e.target.value])
  }

  const handleExpTimeFilterChange = e => {
    setExpTimeFilter(e.target.value)
  }

  return {
    filteredUsers,
    searchQuery,
    handleSearchChange,
    careerFilters,
    handleCareesFilterChange,
    skillFilters,
    handleSkillFilterChange,
    expTimeFilter,
    handleExpTimeFilterChange,
  }
}
