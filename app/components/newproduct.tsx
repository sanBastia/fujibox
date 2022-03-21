import { FunctionComponent } from 'react'
import { Container, Divider, Text, Heading } from '@chakra-ui/react'
import { Card } from './card'

interface NewProductProps {}

export const NewProduct: FunctionComponent<NewProductProps> = () => {
  return (
    <Container maxW="container.xl" py="2em">
      <Heading>New product</Heading>
      <Divider size="100px" />
      <Card />
    </Container>
  )
}
