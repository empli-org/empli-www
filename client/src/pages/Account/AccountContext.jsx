import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

export const AccountContext = React.createContext()

export const AccountContextProvider = ({ children }) => {
  const [accountType, setAccountType] = useLocalStorage('accountType', null)
  const [account, setAccount] = useLocalStorage('account', null)
  const { isLoaded, isSignedIn } = useUser()

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        setAccount(null)
        setAccountType(null)
      }
    }
  }, [isLoaded, isSignedIn])

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        accountType,
        setAccountType,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export const useAccountContext = () => React.useContext(AccountContext)
