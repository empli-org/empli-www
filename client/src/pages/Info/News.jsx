import { useGetPostsQuery } from '@/redux/features/api/base'
import { BlogNews, CloseIcon, Container } from 'components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const News = () => {
  const [key, setKey] = useState('')
  const { data, isLoading, isFetching, isError } = useGetPostsQuery(
    key.length > 0 ? `key=${key}` : '',
  )
  const news = data?.data
  const loading = isLoading || isFetching
  const hasError = !isLoading && !isFetching && isError
  const searchRef = useRef(null)

  useEffect(() => {
    if (searchRef) {
      if (key.length === 0) {
        searchRef.current.value = ''
      }
    }
  }, [key])

  const handleSubmit = e => {
    e.preventDefault()
    setKey(searchRef.current.value)
  }

  return (
    <Container>
      <div className="mt-4 flex flex-col items-center justify-center rounded-2xl bg-hint-of-red py-12">
        <h2 className="mb-2 font-quicksand text-blue-whale">EMPLI BLOG</h2>
        <h1 className="font-amenable text-3xl text-slate-500">
          Encuentra lo último que tenemos para contarte
        </h1>
        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 transform fill-gray-400" />
              <input
                ref={searchRef}
                className="min-w-[420px] rounded-md py-4 pl-10 pr-3 outline-none focus:ring-2 focus:ring-gulf-stream"
                type="search"
                placeholder="Qué estás buscando?"
                defaultValue={key}
              />
            </div>
            {key && (
              <div className="mt-2 px-2">
                <button
                  onClick={() => setKey('')}
                  className="flex items-center gap-2 rounded-xl bg-slate-200 px-4 py-1"
                >
                  <span>{key}</span>
                  <CloseIcon />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <motion.button className="p-30 font-2xl m-2 flex transform justify-between gap-x-4 rounded-bl-2xl rounded-tr-lg bg-gray-100 py-2 text-gray-700 shadow-lg transition duration-500 ease-in-out hover:bg-gray-50">
            <AiOutlineLoading3Quarters className="m-3 animate-pulse animate-spin-slow rounded-full text-3xl font-bold shadow-2xl shadow-blue-whale ring ring-white ring-offset-8 ring-offset-gulf-stream" />{' '}
            Loading...
          </motion.button>
        </div>
      ) : hasError ? (
        <div className="py-8">
          <h1 className="text-xl font-medium text-slate-500">
            No tenemos publicado nada aún.
          </h1>
        </div>
      ) : (
        <BlogNews news={news} />
        // <pre>{JSON.stringify(news, null, 2)}</pre>
      )}
    </Container>
  )
}

export default News
