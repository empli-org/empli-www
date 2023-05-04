import { Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useVerifyAccountMutation } from '@/redux/features/api/account/accountApi'

export const Dashboard = () => {
  const { user } = useClerk()
  const [verifyAccount, { isLoading, isSuccess, error, data }] =
    useVerifyAccountMutation()

  useEffect(() => {
    if (!isLoading && !isSuccess && !error) {
      verifyAccount({ email: user.emailAddresses[0].emailAddress })
    }
  }, [isLoading, isSuccess, error, data])

  if (isLoading && !error && !isSuccess) return <p>Loading..</p>

  return (
    <>
      <SignedIn>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <Navigate to="/auth/login" />
        ) : (
          data && data?.success && <Navigate to={`/dashboard/${data?.type}`} />
        )}
      </SignedIn>
      <SignedOut>
        <Navigate to="/auth/login" />
      </SignedOut>
    </>
  )
}
