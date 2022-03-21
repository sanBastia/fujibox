import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { FunctionComponent, ReactNode } from 'react'

interface NavProps {}
const Links = ['Beranda', 'Produk', 'Cerita', 'Hubungi kami']
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color="#2f5f99"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export const Nav: FunctionComponent<NavProps> = () => {
  return (
    <Container maxW="container.xl">
      <Box>
        <Flex h={20} alignItems={'left'} justifyContent={'space-between'}>
          <Flex>
            <Box>
              <Image
                w={200}
                src="/images/logo/fujibox-logo.png"
                alt="fujibox-logo"
              />
            </Box>
          </Flex>
          <Flex>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
