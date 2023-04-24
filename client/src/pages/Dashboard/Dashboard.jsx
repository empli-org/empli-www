import { useContext } from 'react'
import { AppContext } from '../Account/OnboardingContext'
import { Navigate } from 'react-router-dom'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

export const Dashboard = () => {
  const { accountType } = useContext(AppContext)
  return (
    <>
      <SignedIn>
        <Navigate to={`/dashboard/${accountType.name?.toLowerCase()}`} />
      </SignedIn>
      <SignedOut>
        <Navigate to="/auth/login" />
      </SignedOut>
    </>
  )
}
