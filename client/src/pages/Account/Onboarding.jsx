import { Container } from '@/components'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from './OnboardingContext'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'
import { Step6 } from './steps/Step6'

export const Onboarding = () => {
  const { selectedPlan, activeStep, direction } = useContext(AppContext)

  if (activeStep === 5) {
    if (selectedPlan.name === 'Premium') {
      return <Navigate to="/account/payment" />
    }
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
                {(activeStep === 5 || activeStep === 6) && <Step6 />}
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
