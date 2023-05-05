import { useEffect } from 'react'
import { useAccountContext } from '../Account/AccountContext'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const { accountType } = useAccountContext()
  const navigate = useNavigate()

  useEffect(() => {
    const goTo = () => navigate(`/dashboard/${accountType}`)
    if (accountType) goTo()
  }, [accountType])

  return <h1>Dash</h1>
}
