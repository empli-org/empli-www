import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const FormPodcast = () => {
  const { register, handleSubmit } = useForm()
  const [podcastUrl, setPodcastUrl] = useState([])

  const onSubmit = data => {
    console.log(data)
    setPodcastUrl(data.url)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-bold text-amenable mb-2"
        >
          Título
        </label>
        <input
          {...register('title')}
          id="title"
          type="text"
          className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
          Podcast URL
        </label>
        <input
          {...register('url')}
          id="url"
          type="text"
          className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Descripción
        </label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Podcast
        </button>
      </div>
    </form>
  )
}
