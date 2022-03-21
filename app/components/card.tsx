import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface CardProps {}
const data = [
  {
    id: '123',
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    name: 'box 1',
  },
  {
    id: '345',
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    name: 'Box 2',
  },
  {
    id: '456',
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    name: 'Box 3',
  },
  {
    id: '567',
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    name: 'box 4',
  },
]

export const Card: FunctionComponent<CardProps> = () => {
  return (
    <HStack pt="20px" justifyContent="space-between">
      {data.map((item) => (
        <Box
          key={item.id}
          bg={useColorModeValue('white', 'gray.800')}
          w="300px"
          h="300px"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          {item.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={item.imageURL}
            alt={`Picture of ${item.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {item.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.name}
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
    </HStack>
  )
}
