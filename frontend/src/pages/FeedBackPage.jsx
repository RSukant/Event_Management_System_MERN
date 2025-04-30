import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, Select, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import axios from "../api/axios";
import { useNavigate } from 'react-router-dom';
  
  const FeedbackPage = () => {
    const [feedback, setFeedback] = useState({
      name: '',
      email: '',
      rating: '',
      message: '',
    });
  
    const toast = useToast();
    const navigate = useNavigate();

    const handleCreateFeedback = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`/api/feedback`, feedback);
            const {success,message} = response.data;
            if(success){
            toast({
                title: "Feedback submitted",
                description: message,
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
      <Box py={12}>
        <Container maxW="container.md">
          <VStack spacing={6} textAlign="center" mb={10}>
            <Heading>We value your feedback</Heading>
            <Text color="gray.500" fontSize="lg">
              Help us improve your experience with Event Besties!
            </Text>
          </VStack>
  
          <Box
            as="form"
            bg={useColorModeValue('white', 'gray.700')}
            p={8}
            borderRadius="lg"
            boxShadow="lg"
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Your name"
                  value={feedback.name}
                  onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={feedback.email}
                  onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel>Rating</FormLabel>
                <Select
                  placeholder="Rate your experience"
                  value={feedback.rating}
                  onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
                >
                  <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                  <option value="4">⭐⭐⭐⭐ - Good</option>
                  <option value="3">⭐⭐⭐ - Average</option>
                  <option value="2">⭐⭐ - Poor</option>
                  <option value="1">⭐ - Terrible</option>
                </Select>
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Share your thoughts with us..."
                  rows={5}
                  value={feedback.message}
                  onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                />
              </FormControl>
  
              <Button type="submit" colorScheme="blue" width="full" onClick={handleCreateFeedback}>
                Submit Feedback
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default FeedbackPage;
  