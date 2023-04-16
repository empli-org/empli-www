import { useParams } from 'react-router-dom'

export default function DetalleOferta() {
  const { code } = useParams()
  return (
    <div>
      <h1>Detalle de {code}</h1>
    </div>
  )
}
