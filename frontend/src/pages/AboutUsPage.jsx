import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react';
import { MdEventAvailable, MdPeople, MdVerified } from 'react-icons/md';
  
  const AboutUsPage = () => {
    return (
      <Box py={16}>
        <Container maxW="container.lg">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading fontSize="4xl">About Event Besties</Heading>
            <Text fontSize="lg" color="gray.500" maxW="3xl">
              At Event Besties, we believe in connecting people through shared experiences.
              Our mission is to simplify event discovery and help organizers promote their events effortlessly.
            </Text>
          </VStack>
  
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack spacing={3} align="center">
              <Icon as={MdEventAvailable} w={12} h={12} color="blue.400" />
              <Text fontSize="xl" fontWeight="bold">Event Discovery</Text>
              <Text textAlign="center" color="gray.500">
                Discover a wide range of academic, cultural, and tech events happening near you.
              </Text>
            </VStack>
  
            <VStack spacing={3} align="center">
              <Icon as={MdPeople} w={12} h={12} color="green.400" />
              <Text fontSize="xl" fontWeight="bold">Community Focused</Text>
              <Text textAlign="center" color="gray.500">
                Built with students and professionals in mind, we make participation easy and meaningful.
              </Text>
            </VStack>
  
            <VStack spacing={3} align="center">
              <Icon as={MdVerified} w={12} h={12} color="purple.400" />
              <Text fontSize="xl" fontWeight="bold">Trusted Platform</Text>
              <Text textAlign="center" color="gray.500">
                Backed by a secure backend and intuitive UI, our platform ensures reliable and smooth experiences.
              </Text>
            </VStack>
          </SimpleGrid>
  
          <VStack spacing={4} mt={20} textAlign="center">
            <Heading size="md">Want to get involved?</Heading>
            <Text maxW="2xl" color="gray.500">
              Whether you're an event organizer, a student, or just someone who loves attending events,
              we welcome your feedback and collaboration to keep improving.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default AboutUsPage;
  