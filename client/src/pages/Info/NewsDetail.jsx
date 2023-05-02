import { DetailPublication } from '@/components'
import { useGetPostByIdQuery } from '@/redux/features/api/base'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function NewsDetailPage() {
  const { id } = useParams()
  const { data: publication, isLoading } = useGetPostByIdQuery(id)
  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <motion.button className="p-30 font-2xl m-2 flex transform justify-between gap-x-4 rounded-bl-2xl rounded-tr-lg bg-gray-100 py-2 text-gray-700 shadow-lg transition duration-500 ease-in-out hover:bg-gray-50">
            <AiOutlineLoading3Quarters className="m-3 animate-pulse animate-spin-slow rounded-full text-3xl font-bold shadow-2xl shadow-blue-whale ring ring-white ring-offset-8 ring-offset-gulf-stream" />{' '}
            Loading...
          </motion.button>
        </div>
      ) : (
        <DetailPublication publicacion={publication} />
      )}
    </div>
  )
}
