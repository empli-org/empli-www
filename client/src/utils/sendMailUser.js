import { send } from '@emailjs/browser'

export function sendMailPaymentConfirm(paymentInfo) {
  const templateParams = {
    to_email: paymentInfo.email,
    subscription_id: paymentInfo.subscription_id,
    payment_id: paymentInfo.payment_id,
    payment_amount: paymentInfo.payment_amount,
  }

  send(
    'service_kbbovze',
    'payment_n9j136m',
    templateParams,
    'correo_destinatario',
  ).then(
    result => {
      console.log(result.text)
    },
    error => {
      console.log(error.text)
    },
  )
}
