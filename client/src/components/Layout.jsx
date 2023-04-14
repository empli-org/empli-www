// @ts-nocheck
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <Navbar />
      </div>
      <main className="h-full flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
