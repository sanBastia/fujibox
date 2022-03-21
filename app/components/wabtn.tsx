import { FunctionComponent } from 'react'
import { Text, Button, Container, Box, Center, HStack } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'

interface WhatsappButtonProps {}

export const WhatsappButton: FunctionComponent<WhatsappButtonProps> = () => {
  return (
    <Container maxW="container.lg" py="2em">
      <Box
        p="4"
        boxShadow="lg"
        m="4"
        borderRadius="20"
        bg="#48BB78"
        color="white"
      >
        <HStack spacing="5em" p="1em">
          <Box>
            <Text fontSize="3xl" fontWeight="semibold">
              Leave us a message
            </Text>
            <Text fontSize={{ base: 'md' }} textAlign={'left'} maxW={'4xl'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur incidunt beatae facilis dolor
            </Text>
          </Box>
          <Box>
            <Button
              rightIcon={<BsWhatsapp color="#48BB78" />}
              isFullWidth
              variant="outline"
              size="lg"
              color="#48BB78"
              bg="white"
            >
              Message us
            </Button>
          </Box>
        </HStack>
      </Box>
    </Container>
  )
}
