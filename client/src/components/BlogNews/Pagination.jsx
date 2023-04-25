import React, { useState } from 'react'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'

export const Pagination = ({ current, setCurrent, max }) => {
  const [input, setInput] = useState(current.toString())

  const goToPage = page => {
    const newPage = parseInt(page)
    if (newPage > 0 && newPage <= max) {
      setCurrent(newPage)
      setInput(newPage.toString())
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      goToPage(event.target.value)
    }
  }

  const next = () => {
    const newCurrent = current + 1
    goToPage(newCurrent)
  }

  const previous = () => {
    const newCurrent = current - 1
    goToPage(newCurrent)
  }

  return (
    <div className="flex justify-center gap-x-2 rounded-lg p-2">
      <button disabled={current === 1} onClick={previous}>
        <BsArrowLeftCircle className="animate-pulse rounded-full text-3xl font-bold shadow-md hover:shadow-black" />
      </button>
      <div>
        <label className="font-bold">Pagina</label>
        <input
          type="text"
          maxLength="2"
          name="page"
          autoComplete="off"
          onChange={event => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
          className="mx-3 rounded-2xl bg-white bg-opacity-90 p-2 shadow-sm shadow-black ring ring-blue-whale ring-offset-gulf-stream backdrop-blur-2xl backdrop-filter focus:bg-gray-200 focus:outline-none focus:ring-offset-4"
        />
        <span className="font-bold">de {max}</span>
      </div>
      <button disabled={current === max} onClick={next}>
        <BsArrowRightCircle className="animate-pulse rounded-full text-3xl font-bold shadow-md hover:shadow-black" />
      </button>
    </div>
  )
}
