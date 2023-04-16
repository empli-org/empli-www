import Cards from '@/components/Cards/Cards'
import Search from '@/components/Search/Search'
import Container from '@/components/ui/Container'
import Footer from './footer/Footer'
const Empresas = () => {
  return (
    <Container>
      <div>
        <Search />
        <Cards />
      </div>
      <Footer />,
    </Container>
  )
}

export default Empresas
