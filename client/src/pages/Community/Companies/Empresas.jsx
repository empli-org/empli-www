// import Cards from '@/components/Cards/Cards'
// import Search from '@/components/Search/Search'
// import Container from '@/components/ui/Container'
import { Cards, Search, Container } from 'components'

export const Empresas = () => {
  return (
    <Container>
      <div>
        <Search />
        <Cards />
      </div>
    </Container>
  )
}

export default Empresas
