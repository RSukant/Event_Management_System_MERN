import { Box, Container, SimpleGrid, Stack, Text, Link as ChakraLink, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaRss } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  
  const Footer = () => {
    const textColor = useColorModeValue('gray.700', 'gray.300');
    const bgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Box bg={bgColor} color={textColor} mt={10} py={10} borderColor="gray.700">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8} mb={10}>
          <Stack spacing={3}>
              <Text fontSize="lg" fontWeight="bold">FOLLOW US</Text>
              <ChakraLink href="#"><Icon as={FaFacebook} mr={2} /> Facebook</ChakraLink>
              <ChakraLink href="#"><Icon as={FaInstagram} mr={2} /> Instagram</ChakraLink>
              <ChakraLink href="#"><Icon as={FaLinkedin} mr={2} /> Linkedin</ChakraLink>
            </Stack>
  
            <Stack spacing={3}>
              <Text fontSize="lg" fontWeight="bold">LEGAL</Text>
              <Link to="/terms">
              <ChakraLink>Terms of use</ChakraLink>
              </Link>
              <Link to="/privacy">
              <ChakraLink>Privacy policy</ChakraLink>
              </Link>
              <Link to="/support">
              <ChakraLink>Support</ChakraLink>
              </Link>
            </Stack>

            <Text fontSize="25" fontWeight="bold">Participate in Events using Event Besties</Text>

            <Link to="/create">
            <Button 
            size='md' 
            bg={useColorModeValue('blue.500', 'blue.600')} 
            w="200px"
            _hover={{ bg: useColorModeValue('blue.600', 'blue.700') }} >
              Create Event
            </Button>
            </Link>
  
          </SimpleGrid>
  
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            justifyContent="space-between"
            alignItems="center"
            borderTop="1px"
            borderColor="gray.600"
            pt={6}
          >
            <Stack direction="row" spacing={6}>
              <Link to="/privacy">
              <ChakraLink>Privacy and Policy</ChakraLink>
              </Link>
              <Link to="/terms">
              <ChakraLink>Terms</ChakraLink>
              </Link>
              <Link to="/about">
              <ChakraLink>About us</ChakraLink>
              </Link>
            </Stack>
            <Text textAlign={{ base: 'left', md: 'right' }}>&copy; Event Besties. 2025</Text>
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  