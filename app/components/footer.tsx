import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => (
  <Container as="footer" bg="gray.100" maxW="full">
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Image w={200} src="/images/logo/fujibox-logo.png" alt="fujibox-logo" />
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Fujibox, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  </Container>
)
