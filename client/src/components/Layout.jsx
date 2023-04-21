// @ts-nocheck
import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar/Navbar'
import Footer from './footer/Footer'

export const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <main className="h-full flex-1 bg-slate-100 pb-32">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
