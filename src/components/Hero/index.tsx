import { Container } from '../../global'
import { ContainerRelative, Form, HeroTitle } from './styles'

const Hero = () => (
  <Form>
    <Container>
      <ContainerRelative>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </ContainerRelative>
    </Container>
  </Form>
)

export default Hero
