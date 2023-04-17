import Container from '@/components/ui/Container'
import { useParams } from 'react-router-dom'

export default function TalentDetail() {
  const { id } = useParams()
  return (
    <div>
      <Container>
        <h1>Detalle de profesional {id}</h1>
      </Container>
    </div>
  )
}
