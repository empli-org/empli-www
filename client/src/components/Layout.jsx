// @ts-nocheck
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <main className="h-full flex-1 bg-slate-100">
        <Outlet />
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
