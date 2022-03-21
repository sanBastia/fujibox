import { FunctionComponent } from 'react'
import { Container, Divider, Text } from '@chakra-ui/react'
import { Card } from './card'

interface NewProductProps {}

export const NewProduct: FunctionComponent<NewProductProps> = () => {
  return (
    <Container maxW="container.xl" pt="2em">
      <Text fontSize="3xl">New product</Text>
      <Divider size="100px" />
      <Card />
    </Container>
  )
}
