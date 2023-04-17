import { Container } from 'components'
import { useParams } from 'react-router-dom'

export const TalentDetail = () => {
  const { id } = useParams()
  return (
    <div>
      <Container>
        <h1>Detalle de profesional {id}</h1>
      </Container>
    </div>
  )
}
