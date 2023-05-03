import { Container } from '@/components'
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AppContext, Step1, Step2, Step3, Step4, Step6 } from 'pages'
import { useAccountContext } from '../AccountContext'
import { useVerifyAccountMutation } from '@/redux/features/api/account/accountApi'

export const Onboarding = () => {
  const [verifyUser, { isLoading, isSuccess, error, data }] =
    useVerifyAccountMutation()
  const { setAccount, setAccountType } = useAccountContext()
  const { user, loaded } = useClerk()
  const { selectedPlan, activeStep, direction } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    const goToDash = accountType => navigate(`/dashboard/${accountType}`)
    if (loaded && activeStep === 1) {
      if (!isLoading && !isSuccess && !data?.success && !error) {
        verifyUser({ email: user.primaryEmailAddress.emailAddress })
      }
    }
    if (data && data.success) {
      setAccount(data.account)
      setAccountType(data.type)
      goToDash(data.type)
    }
  }, [loaded, isLoading, error, data, isSuccess, activeStep])

  if (activeStep === 5) {
    if (selectedPlan.name !== 'Free') {
      return <Navigate to="/account/payment" />
    }
  }

  if (activeStep === 1 && isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-hint-of-red font-bold">
        <p>Verificando datos...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-hint-of-red">
      <SignedIn>
        <Container>
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
                {((activeStep === 5 && selectedPlan.name === 'Free') ||
                  activeStep === 6) && <Step6 />}
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </SignedIn>
      <SignedOut>
        <Navigate replace to="/auth/login" />
      </SignedOut>
    </div>
  )
}
