import { SignIn } from '@clerk/clerk-react'

export function Login() {
  return (
    <>
      <SignIn signUpUrl="/auth/register" />
    </>
  )
}
