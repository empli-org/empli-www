import SimplePagination from '@/components/Pagination'
import JobAreaSearch from '@/components/Search/JobAreaSearch'
import JobSearch from '@/components/Search/JobSearch'
import LocationSearch from '@/components/Search/LocationSearch'
import JobsFallback from '@/components/fallbacks/JobsFallback'
import { CloseIcon, FilterIcon } from '@/components/icons'
import Container from '@/components/ui/Container'
import JobCard from '@/components/ui/cards/JobCard'
import { useGetJobsQuery } from '@/redux/features/api/base'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const queryStringFromObj = obj =>
  Object.keys(obj)
    .map(key => obj[key] && key + '=' + obj[key])
    .join('&')

const Ofertas = () => {
  const [filterOpen, setFilterOpen] = useState(false)
  const [filters, setFilters] = useState({})
  const hasFilters = Object.values(filters).some(Boolean)
  const queryString = queryStringFromObj(filters)
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useGetJobsQuery({ queryString, page })
  const jobs = data?.data
  const countJobs = data?.count
  const jobsLoading = isLoading || isFetching
  const totalPages = Math.ceil(countJobs / 10)
  const navigate = useNavigate()

  useEffect(() => {
    setPage(1)
  }, [filters])

  const handleFilters = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  return (
    <div>
      <Container>
        <div className="mt-8 py-6">
          <h1 className="text-center text-2xl font-bold md:text-4xl">
            Explore las mejores ofertas laborales
          </h1>
        </div>
        <header className="flex items-center justify-between py-4">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg bg-slate-100 px-2 py-4 sm:p-8">
            <div className="flex w-full items-center justify-between gap-4">
              <JobSearch onSelect={item => navigate(`/offers/${item.code}`)} />
              <motion.button
                initial={false}
                className="relative rounded-lg bg-slate-200 p-4"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                {filterOpen ? <CloseIcon /> : <FilterIcon />}
                {hasFilters && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-red-400" />
                )}
              </motion.button>
            </div>
            <AnimatePresence initial={false}>
              {filterOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  className="w-full"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <div className="flex w-full flex-col gap-2 py-4 md:flex-row md:gap-4">
                    <div className="w-full">
                      <LocationSearch
                        onSelect={selected =>
                          handleFilters('location', selected.city)
                        }
                      />
                      {filters?.location && (
                        <div className="flex py-3">
                          <div className="flex items-center gap-2 rounded-full bg-slate-200 px-3 py-2 text-sm">
                            <span>{filters.location}</span>
                            <button
                              onClick={() =>
                                setFilters({ ...filters, location: null })
                              }
                            >
                              <CloseIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full">
                      <JobAreaSearch
                        onSelect={selected =>
                          handleFilters('area', selected.name)
                        }
                      />
                      {filters?.area && (
                        <div className="flex py-3">
                          <div className="flex items-center gap-2 rounded-full bg-slate-200 px-3 py-2 text-sm">
                            <span>{filters.area}</span>
                            <button
                              onClick={() =>
                                setFilters({ ...filters, area: null })
                              }
                            >
                              <CloseIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <ul className="scrollbar-hide flex items-center overflow-x-auto">
            <li className="cursor-pointer whitespace-nowrap rounded-lg bg-slate-200 p-2 px-4">
              Todos
            </li>
            <li className="cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-slate-600">
              Populares
            </li>
            <li className="cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-slate-600">
              Recomendados
            </li>
          </ul>
        </div>

        {jobsLoading && <JobsFallback />}

        <section className="grid grid-cols-listing gap-4 py-4">
          {!jobsLoading &&
            jobs?.map(job => <JobCard key={job.code} job={job} />)}
        </section>

        {(!countJobs || countJobs === 0) && !jobsLoading && (
          <div className="py-12">
            <h1 className="text-center text-2xl font-bold text-slate-500 sm:text-4xl">
              Aún no tenemos nada por aquí!!
            </h1>
          </div>
        )}

        <SimplePagination
          currentPage={page}
          totalPages={totalPages}
          setCurrentPage={setPage}
        />
      </Container>
    </div>
  )
}

export default Ofertas
