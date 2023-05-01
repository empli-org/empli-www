import { Container } from '@/components'
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext, Step1, Step2, Step3, Step4, Step6 } from 'pages'
import { useVerifyAccountMutation } from '@/redux/features/api/base'

export const Onboarding = () => {
  const [verifyUser, { isLoading, isSuccess, error, data }] =
    useVerifyAccountMutation()
  const { user, loaded } = useClerk()
  const { selectedPlan, activeStep, direction } = useContext(AppContext)

  useEffect(() => {
    if (loaded) {
      if ((!isLoading && !isSuccess, !error)) {
        verifyUser({ email: user.emailAddresses[0].emailAddress })
      }
    }
  }, [loaded, isLoading, isSuccess, error])

  if (isSuccess && data.success) {
    return <Navigate to={`/dashboard/${data.type}`} />
  }

  if (activeStep === 5) {
    if (selectedPlan.name === 'Premium') {
      return <Navigate to="/account/payment" />
    }
  }

  return (
    <div className="min-h-screen bg-hint-of-red">
      <SignedIn>
        <Container>
          {!loaded || isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="mx-auto max-w-3xl pt-12">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={activeStep}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={direction}
                  className="step-container-box"
                >
                  {activeStep === 1 && <Step1 />}
                  {activeStep === 2 && <Step2 />}
                  {activeStep === 3 && <Step3 />}
                  {activeStep === 4 && <Step4 />}
                  {(activeStep === 5 || activeStep === 6) && <Step6 />}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </Container>
      </SignedIn>
      <SignedOut>
        <Navigate replace to="/auth/login" />
      </SignedOut>
    </div>
  )
}
