import React from 'react';
import { useState } from 'react';
import { Container, VStack, Heading, Box, Input, Button, useColorModeValue, useToast } from '@chakra-ui/react';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const UserCreatePage = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const navigate = useNavigate();

  const toast = useToast();

  const handleCreateUser = async() => {
    try{
        const response = await axios.post(`/api/users`, newUser);
        const {success,message} = response.data;
        if(success){
          const { data:user } = response.data;
          localStorage.setItem("user", JSON.stringify(user));

        toast({
            title: "Signed in successfully",
            description: "Welcome to the platform!",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        navigate('/home');
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
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minH="100vh"
      bg={useColorModeValue("white", "gray.900")}
    >
      <Container maxW="sm" p={8} borderRadius="lg" boxShadow="lg" bg={useColorModeValue("gray.200", "gray.800")}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            Sign In
          </Heading>

          <Box w="full">
            <VStack spacing={4}>
              <Input
                placeholder="User Name"
                name="name"
                borderColor={useColorModeValue("gray.400", "gray.600")}
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />

              <Input
                placeholder="User Email"
                name="email"
                type="email"
                borderColor={useColorModeValue("gray.400", "gray.600")}
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />

              <InputGroup size='md'>
                <Input
                  placeholder="User Password"
                  name="password"
                  borderColor={useColorModeValue("gray.400", "gray.600")}
                  type={show ? 'text' : 'password'}
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? <ViewOffIcon/> : <ViewIcon/>}
                    </Button>
                </InputRightElement>
              </InputGroup>

              <Button colorScheme="blue" onClick={handleCreateUser} w="full">
                Sign In
              </Button>
              <p>Have an account ? <Link to="/" style={{ textDecoration:"underline", color:"#4052D6" }}>Login</Link></p>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default UserCreatePage;