// @ts-nocheck
import { Button, Container } from '@/components'
import { useEffect } from 'react'

export const FeedBackPayment = () => {
  useEffect(() => {
    const idQuery = new URLSearchParams(window.location.search)
    let payment_id = idQuery.get('payment_id')
    setTimeout(() => {
      verify({ payment_id })
        .unwrap()
        .then(res => {
          res.status === 200
            ? Swal.fire('Approved payment', undefined, 'success')
            : Swal.fire({ icon: 'error', title: 'Failed payment' })
          navigate(`/${res.data}/profile`)
        })
        .catch(() => {
          Swal.fire({ icon: 'error', title: 'Failed payment' })
          navigate('/home')
        })
    }, 3500)
  }, [])

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-xl font-amenable font-bold">
          Gracias por hacer updgrade en nuestra plataforma
        </h1>
        <div className="py-6">
          <Button link="/" title="Ir al inicio" color="blue-whale" />
        </div>
      </div>
    </Container>
  )
}
