import React from 'react'

export const Publications = ({ publicaciones }) => {
  return (
    <div>
      <h1>Publicaciones</h1>
      {publicaciones.map(publicacion => (
        <div key={publicacion.id}>
          <h2>{publicacion.titulo}</h2>
          <img src={publicacion.imagen} alt={publicacion.titulo} />
          <p>{publicacion.resumen}</p>
        </div>
      ))}
    </div>
  )
}
