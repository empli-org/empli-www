import React, { useState, useEffect } from 'react'
// @ts-ignore
import axios from 'axios'
import { DetailPublication, Publication } from 'components'
import { useGoUp } from '@/hooks/useGoUp'

// En este componente estamos usando axios unicamente a modo de probar el funcionamiento con la api en uso.
// Pero dicha api debe ser removida cuando tengamos definido la creacion de las noticias con un post desde el dashboard
export const BlogNews = () => {
  const [publicaciones, setPublicaciones] = useState([])
  const [newSelect, setNewSelect] = useState({})
  const [onOff, setOnOff] = useState(false)
  const buttonGoUp = useGoUp()

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      const { data } = await axios.get(
        'https://api.thenewsapi.com/v1/news/all?api_token=qgJCDB8rV4F842yLTlIyFLPG0Xda8rCiA4SbgBEg&language=en&limit=3',
      )
      const noticias = data.data.map(noticia => ({
        tipo: 'imagen',
        url: noticia.image_url,
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
        <>
          <div>
            <h1 className="mb-8 text-4xl font-bold">Blog Empli</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {publicaciones.map((publicacion, index) => (
              <Publication
                key={index}
                publicacion={publicacion}
                onSeleccionarPublicacion={handleSeleccionarPublicacion}
              />
            ))}
          </div>
        </>
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
