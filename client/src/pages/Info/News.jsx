import { BlogNews, Container } from 'components'
import { FaSearch } from 'react-icons/fa'

export const News = () => {
  return (
    <Container>
      <div className="mt-4 flex flex-col items-center justify-center rounded-2xl bg-hint-of-red py-12">
        <h2 className="mb-2 font-quicksand text-blue-whale">EMPLI BLOG</h2>
        <h1 className="font-amenable text-3xl text-slate-500">
          Encuentra lo último que tenemos para contarte
        </h1>
        <div className="mt-6">
          <form onSubmit={e => e.preventDefault()}>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 transform fill-gray-400" />
              <input
                className="min-w-[420px] rounded-md py-4 pl-10 pr-3 outline-none focus:ring-2 focus:ring-gulf-stream"
                type="search"
                placeholder="Qué estás buscando?"
              />
            </div>
          </form>
        </div>
      </div>
      <BlogNews />
    </Container>
  )
}

export default News
