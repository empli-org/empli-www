// @ts-nocheck
import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from '@/pages/Menu'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  //funcion para cambiar el estado
  function toggleOpen() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="h-screen">
      <Navbar props={toggleOpen} />
      <Menu />
      {children}
    </div>
  )
}

export default Layout
