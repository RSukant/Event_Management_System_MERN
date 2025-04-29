import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react';
import { MdEmail, MdHelp, MdSupportAgent } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios'
  
  const SupportPage = () => {
    const [help, setHelp] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const toast = useToast();
        const navigate = useNavigate();
    
        const handleSubmit = async(e) => {
            e.preventDefault();
    
            try{
                const response = await axios.post(`/api/help`, help);
                const {success,message} = response.data;
                if(success){
                toast({
                    title: "Help Submitted",
                    description: "Will reach you shortly through email",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                navigate('/landing');
                } else {
                toast({
                    title: "Error",
                    description: message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            } catch(error){
            toast({
                title: "Error",
                description: error.response?.data?.message || "Something went wrong",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          };
  
    return (
      <Box py={10}>
        <Container maxW="container.md">
          <VStack spacing={6} textAlign="center" mb={10}>
            <Heading>Need Help?</Heading>
            <Text fontSize="lg" color="gray.500">
              We're here to assist you. Reach out via the form below or check out our FAQs.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10} justifyItems="center">
            <VStack spacing={2} align="center">
                <Icon as={MdEmail} w={8} h={8} color="blue.400" />
                <Text fontWeight="bold">Email Support</Text>
                <Text color="gray.500" textAlign="center">support@eventbesties.com</Text>
            </VStack>

            <VStack spacing={2} align="center">
                <Icon as={MdHelp} w={8} h={8} color="green.400" />
                <Text fontWeight="bold">FAQs</Text>
                <Text color="gray.500" textAlign="center">Answers to common questions</Text>
            </VStack>

            <VStack spacing={2} align="center">
                <Icon as={MdSupportAgent} w={8} h={8} color="purple.400" />
                <Text fontWeight="bold">Live Support</Text>
                <Text color="gray.500" textAlign="center">Coming soon</Text>
            </VStack>
            </SimpleGrid>
  
          <Box as="form" onSubmit={handleSubmit} bg={useColorModeValue("white", "gray.700")} p={8} borderRadius="lg" boxShadow="lg">
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                type="text"
                placeholder="Your full name" 
                value={help.name}
                onChange={(e) => setHelp({ ...help, name: e.target.value })}
                />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                type="email" 
                placeholder="you@example.com" 
                value={help.email}
                onChange={(e) => setHelp({ ...help, email: e.target.value })}
                />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea 
                type="text"
                placeholder="Tell us how we can help you..." 
                rows={5} 
                value={help.message}
                onChange={(e) => setHelp({ ...help, message: e.target.value })}
                />
              </FormControl>
  
              <Button colorScheme="blue" type="submit" width="full">
                Submit
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default SupportPage;
  