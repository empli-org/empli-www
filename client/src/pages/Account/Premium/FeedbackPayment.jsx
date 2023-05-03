import { useContext } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD:client/src/pages/Account/Payment.jsx
import { AppContext } from './OnBoarding/AppContext'
=======
import { AppContext } from 'pages'
>>>>>>> e657c51400facdf546114ab0a1557cc6563da84e:client/src/pages/Account/Premium/FeedbackPayment.jsx
import { Container } from '@/components'

export const FeedBackPayment = () => {
  const { setActiveStep } = useContext(AppContext)

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-xl font-bold">
          Acá va el checkout de mercado pago
        </h1>
        <div className="py-6">
          <Link
            className="rounded bg-blue-whale px-6 py-3 text-white"
            onClick={() => setActiveStep(6)}
            to="/account/onboarding"
          >
            Pagar
          </Link>
        </div>
      </div>
    </Container>
  )
}
