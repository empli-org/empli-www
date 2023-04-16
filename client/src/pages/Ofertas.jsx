import JobAreaSearch from '@/components/Search/JobAreaSearch'
import JobSearch from '@/components/Search/JobSearch'
import LocationSearch from '@/components/Search/LocationSearch'
import { CloseIcon, FilterIcon } from '@/components/icons'
import Container from '@/components/ui/Container'
import JobCard from '@/components/ui/cards/JobCard'
import { useGetJobsQuery } from '@/redux/features/api/jobs'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const Ofertas = () => {
  const [filterOpen, setFilterOpen] = useState(false)
  const { data: jobs, isLoading } = useGetJobsQuery()

  if (isLoading) return <p>Loading...</p>
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
              <JobSearch />
              <motion.button
                initial={false}
                className="rounded-lg bg-slate-200 p-4"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                {filterOpen ? <CloseIcon /> : <FilterIcon />}
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
                    <LocationSearch />
                    <JobAreaSearch />
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

        <section className="grid grid-cols-listing gap-4 py-4">
          {jobs?.map(job => (
            <JobCard key={job.code} job={job} />
          ))}
        </section>

        <div className="py-6 text-center">
          <button className="rounded-lg bg-slate-300 p-4">Mostrar mas</button>
        </div>
      </Container>
    </div>
  )
}

export default Ofertas
