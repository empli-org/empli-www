import { Container } from '@/components'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Link, Navigate } from 'react-router-dom'

export function Onboarding() {
  return (
    <>
      <SignedIn>
        <Container>
          <div className="pt-12">
            <h1>Onboarding</h1>
            <p>Acá se crea la cuenta de profesional o de empresa</p>
            <p>Work in progress</p>
            <div className="py-6">
              <Link to="/" className="underline">
                Back to home if testing
              </Link>
            </div>
          </div>
        </Container>
      </SignedIn>
      <SignedOut>
        <Navigate replace to="/auth/login" />
      </SignedOut>
    </>
  )
}
