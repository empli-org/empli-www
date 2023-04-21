import { SignIn } from '@clerk/clerk-react'

export const Login = () => {
  return (
    <>
      <SignIn
        signUpUrl="/auth/register"
        afterSignInUrl="/account/onboarding"
        afterSignUpUrl="/account/onboarding"
      />
    </>
  )
}
