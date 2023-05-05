// @ts-nocheck
import { Button, Container } from '@/components'
import { useContext,  useEffect} from 'react'
import { AppContext } from '../OnBoarding/AppContext'
import { useGetFeedbackPlanQuery, useLazyGetPlanQuery } from '@/redux/features/api/plan/planApi'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { sendMailPaymentConfirm } from '@/components/MercadoPago/sendMailUser'

// import { useEffect } from 'react'

export const FeedBackPayment = () => {
  const { setActiveStep } = useContext(AppContext)
  const { user, isLoaded } = useUser()
  // const navigate = Navigate()
  const [verify] = useLazyGetPlanQuery()
  useEffect(() => {
    const idQuery = new URLSearchParams(window.location.search)
    let payment_id = idQuery.get('payment_id')
    setTimeout(() => {
      verify({ payment_id })
        .unwrap()
        .then(res => {
          res.status === 200
            ? Swal.fire('Pago Confirmado', undefined, 'success')
            : Swal.fire({ icon: 'error', title: 'Fallo el pago' })
          // navigate(`/${res.data}/profile`)
          if (isLoaded && user) {
            const paymentInfo = {
              email: user.email,
              subscription_id: res.data.id.reason,
              payment_id: res.data.id.id,
              payment_amount: res.data.id.auto_recurring.transaction_amount,
            }
            sendMailPaymentConfirm(paymentInfo)
          }
        })
        .catch(() => {
          Swal.fire({ icon: 'error', title: 'fallo el pago' })
          // navigate('/home')
        })
    }, 3500)
    
  }, [])

  return (
    <Container>
      <div className="py-12">
        <h1 className="font-amenable text-xl font-bold">
          Gracias por hacer updgrade en nuestra plataforma
        </h1>
        <div className="py-6">
          <Button
            onClick={() => setActiveStep(6)}
            link="/account/onboarding"
            title="Finalizar"
            color="blue-whale"
          />
        </div>
      </div>
    </Container>
  )
}
