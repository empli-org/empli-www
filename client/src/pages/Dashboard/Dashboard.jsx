import { useContext } from 'react'
import { AppContext } from '../Account/OnboardingContext'
import { Navigate } from 'react-router-dom'

export const Dashboard = () => {
  const { accountType } = useContext(AppContext)
  return (
    <div>
      <Navigate to={`/dashboard/${accountType.name?.toLowerCase()}`} />
    </div>
  )
}
