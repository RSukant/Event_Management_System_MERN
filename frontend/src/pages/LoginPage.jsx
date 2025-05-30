import React from 'react';
import { useState } from 'react';
import { Container, VStack, Heading, Box, Input, Button, useColorModeValue, useToast } from '@chakra-ui/react';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from "../api/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CheckUserPage = () => {
  const [presentUser, setCheckUser] = useState({
    email: '',
    password: '',
  });

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const navigate = useNavigate();

  const toast = useToast();

  const checkExistingUser = async() => {
    try{
        const response = await axios.post(`/api/users/login`, { email : presentUser.email, password : presentUser.password });
        const {success,message} = response.data;
        if(success){
          const anotherResponse = await axios.get(`/api/users/account/${presentUser.email}`);
          const { data:user } = anotherResponse.data;

          localStorage.setItem("user", JSON.stringify(user));

          toast({
              title: "Login successful",
              description: message,
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            navigate('/landing');
        }
        else{
          toast({
            title: "Caution",
            description: message,
            status: "warning",
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
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minH="100vh" // Full viewport height
      bg={useColorModeValue("white", "gray.900")}
    >
      <Container maxW="sm" p={8} borderRadius="lg" boxShadow="lg" bg={useColorModeValue("gray.200", "gray.800")}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            Login
          </Heading>

          <Box w="full">
            <VStack spacing={4}>
              <Input
                placeholder="User Email"
                name="email"
                type="email"
                borderColor={useColorModeValue("gray.400", "gray.600")}
                value={presentUser.email}
                onChange={(e) => setCheckUser({ ...presentUser, email: e.target.value })}
              />
              <InputGroup size='md'>
                <Input
                  placeholder="User Password"
                  name="password"
                  borderColor={useColorModeValue("gray.400", "gray.600")}
                  type={show ? 'text' : 'password'}
                  value={presentUser.password}
                  onChange={(e) => setCheckUser({ ...presentUser, password: e.target.value })}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? <ViewOffIcon/> : <ViewIcon/>}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button colorScheme="blue" onClick={checkExistingUser} w="full">
                Login
              </Button>
              <p>Don't have an account ? <Link to="/signup" style={{ textDecoration:"underline", color:"#4052D6" }}>Sign up</Link></p>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CheckUserPage;