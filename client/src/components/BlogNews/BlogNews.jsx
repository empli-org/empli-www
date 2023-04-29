// @ts-nocheck
import React, { useState, useEffect } from 'react'
// @ts-ignore
import axios from 'axios'
import { DetailPublication, Publication } from 'components'
import { SocialMedia } from './SocialMedia'
import { useGoUp } from '@/hooks/useGoUp'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Pagination } from './Pagination'

// En este componente estamos usando axios unicamente a modo de probar el funcionamiento con la api en uso.
// Pero dicha api debe ser removida cuando tengamos definido la creacion de las noticias con un post desde el dashboard
export const BlogNews = () => {
  const [publicaciones, setPublicaciones] = useState([])
  const [newSelect, setNewSelect] = useState({})
  const [onOff, setOnOff] = useState(false)
  const buttonGoUp = useGoUp()
  const [input, setInput] = useState(1)
  const [current, setCurrent] = useState(1)
  const [perPage] = useState(10)
  const max = Math.ceil(publicaciones.length / perPage)

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      const { data } = await axios.get(
        'https://newsapi.org/v2/everything?q=tesla&from=2023-03-24&sortBy=publishedAt&apiKey=f691099a4c0249b49545c9e6cab2c8d0',
      )
      const noticias = data.articles.map(noticia => ({
        tipo: 'imagen',
        url: noticia.urlToImage,
        titulo: noticia.title,
        descripcion: noticia.description,
        contenido: noticia.content,
        autor: noticia.author,
        fecha: noticia.published_At,
        more: noticia.url,
        fuente: noticia.source.name,
        avatar: 'https://picsum.photos/40/40',
      }))
      setPublicaciones(noticias)
    }
    obtenerPublicaciones()
  }, [])

  if (publicaciones.length === 0) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <motion.button className="p-30 font-2xl m-2 flex transform justify-between gap-x-4 rounded-bl-2xl rounded-tr-lg bg-gray-100 py-2 text-gray-700 shadow-lg transition duration-500 ease-in-out hover:bg-gray-50">
          <AiOutlineLoading3Quarters className="m-3 animate-pulse animate-spin-slow rounded-full text-3xl font-bold shadow-2xl shadow-blue-whale ring ring-white ring-offset-8 ring-offset-gulf-stream" />{' '}
          Loading...
        </motion.button>
      </div>
    )
  }

  const handleSeleccionarPublicacion = publicacion => {
    console.log('Publicación seleccionada:', publicacion)
    const newNews = publicacion
    setNewSelect(newNews)
    if (!onOff) {
      // cuando hay una noticia selecionada el estado onOff se setea en true y se renderiza unicamente la noticia seleccionada
      setOnOff(true)
    }
    console.log(newSelect)
    console.log(onOff)
  }

  return (
    <div className="container mx-auto py-12">
      {!onOff ? (
        <div className="flex justify-stretch">
          <div className="flex flex-col">
            <h1 className=" mb-8 mr-5 text-4xl font-bold">Blog News</h1>
            <div className="grid-  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {publicaciones
                ?.slice(
                  (current - 1) * perPage,
                  (current - 1) * perPage + perPage,
                )
                .map((publicacion, index) => (
                  <Publication
                    key={index}
                    publicacion={publicacion}
                    onSeleccionarPublicacion={handleSeleccionarPublicacion}
                  />
                ))}
            </div>

            <Pagination
              current={current}
              setCurrent={setCurrent}
              max={max}
              input={input}
              setInput={setInput}
            />
          </div>
          <SocialMedia />
        </div>
      ) : (
        <div>
          <DetailPublication setOnOff={setOnOff} publicacion={newSelect} />
        </div>
      )}
      {/* en este boton utilizamos el hook que devuelve al usuario a la parte superior de la pagina. Los estilos y la logica del boton se encuentra dentro del hook useGoUp dentro de la carpeta hooks. En teoria el boton cuando el scroll desciende */}
      {buttonGoUp}
    </div>
  )
}
