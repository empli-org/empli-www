import { SignUp } from '@clerk/clerk-react'

export const Register = () => {
  return (
    <>
      <SignUp
        signInUrl="/auth/login"
        afterSignUpUrl="/account/onboarding"
        afterSignInUrl="/account/onboarding"
      />
    </>
  )
}
