import { SignUp } from '@clerk/clerk-react'

export function Register() {
  return (
    <>
      <SignUp signInUrl="/auth/login" />
    </>
  )
}
