import { useNavigate } from 'react-router-dom'
import { useAccountContext } from '../Account/AccountContext'
import { useEffect } from 'react'

export default function Protected({ children, accountType: at }) {
  const { accountType } = useAccountContext()
  const navigate = useNavigate()

  useEffect(() => {
    const goToDash = () => navigate('/dashboard')
    if (accountType && accountType !== at) {
      goToDash()
    }
  }, [accountType, at])

  return <>{children}</>
}
