import React from 'react';
import { useState } from 'react';
import { Container, VStack, HStack, Heading, Box, Input, Button, useColorModeValue, useToast, InputGroup } from '@chakra-ui/react';
import axios from "../api/axios";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { InputRightElement } from '@chakra-ui/react';

import { useNavigate, Link } from 'react-router-dom';


const ProfileUpdatePage = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const [newUser, setNewUser] = useState(user);

  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const handleUpdateUser = async (eid, newUser) => {
    try {
        const response = await axios.put(`/api/users/${eid}`, newUser);
        const { success, message } = response.data;

        if (success) {
            localStorage.setItem('user', JSON.stringify(newUser));
            toast({
                title: 'Success',
                description: 'Profile updated successfully',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            navigate('/manage');
        } else {
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    } catch (error) {
        toast({
            title: 'Error',
            description: error.response?.data?.message || 'Something went wrong',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    }
};

  return <Container maxW={"container.sm"} py={12}>
    <VStack
      spacing={8}
    >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={6}>
        Update Profile
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={8} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
          placeholder={"Username"}
          name='name'
          value={newUser.username || ''}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />

          <Input
          placeholder={"Email"}
          name='email'
          value={newUser.email || ''}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />

          <InputGroup size='md'>
            <Input
            placeholder={"Password"}
            name='password'
            type={show ? 'text' : 'password'}
            value={newUser.password || ''}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? <ViewOffIcon/> : <ViewIcon/>}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Input
          placeholder={"Event Image URL"}
          name='image'
          value={newUser.image || ''}
          onChange={(e) => setNewUser({ ...newUser, image: e.target.value })}
          />
          <HStack spacing={5}>
          <Button colorscheme={"blue"} onClick={ () => handleUpdateUser(user._id, newUser) } w={"75px"}>
            Save
          </Button>
          <Link to="/manage">
          <Button colorscheme={"blue"} w={"75px"}>
            Cancel
          </Button>
          </Link>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  </Container>
};

export default ProfileUpdatePage;