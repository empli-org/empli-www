// @ts-nocheck
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from 'components'
import { useGoUp } from '@/hooks/useGoUp'

export const Layout = () => {
  const goUp = useGoUp()
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <main className="h-full flex-1 bg-slate-100 pb-32">
        <Outlet />
        {goUp}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}
