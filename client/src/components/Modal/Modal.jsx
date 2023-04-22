import React, { useState } from 'react'

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir modal</button>
      {isOpen && (
        <div>
          <h2>Contenido del modal</h2>
          <p>Este es el contenido del modal.</p>
          <button onClick={() => setIsOpen(false)}>Cerrar modal</button>
        </div>
      )}
    </div>
  )
}
