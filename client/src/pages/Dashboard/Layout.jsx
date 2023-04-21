import { Container } from '@/components'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <>
      <SignedIn>
        <Container>
          <div className="py-12">
            <Outlet />
          </div>
        </Container>
      </SignedIn>
      <SignedOut>
        <Navigate to="/auth/login" />
      </SignedOut>
    </>
  )
}
