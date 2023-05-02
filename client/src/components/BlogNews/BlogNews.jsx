// @ts-nocheck
import React, { useState } from 'react'
// @ts-ignore
import { Publication } from 'components'
import { useGoUp } from '@/hooks/useGoUp'
import { Pagination } from './Pagination'

// En este componente estamos usando axios unicamente a modo de probar el funcionamiento con la api en uso.
// Pero dicha api debe ser removida cuando tengamos definido la creacion de las noticias con un post desde el dashboard
export const BlogNews = ({ news: publicaciones }) => {
  const buttonGoUp = useGoUp()
  const [input, setInput] = useState(1)
  const [current, setCurrent] = useState(1)
  const [perPage] = useState(10)
  const max = Math.ceil(publicaciones.length / perPage)

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-stretch">
        <div className="flex flex-col">
          <div className="grid-  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publicaciones
              ?.slice(
                (current - 1) * perPage,
                (current - 1) * perPage + perPage,
              )
              .map((publicacion, index) => (
                <Publication key={index} publicacion={publicacion} />
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
      </div>
      {/* en este boton utilizamos el hook que devuelve al usuario a la parte superior de la pagina. Los estilos y la logica del boton se encuentra dentro del hook useGoUp dentro de la carpeta hooks. En teoria el boton cuando el scroll desciende */}
      {buttonGoUp}
    </div>
  )
}
