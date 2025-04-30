import React from 'react';
import { useState } from 'react';
import { Container, VStack, Heading, Box, Input, Button, useColorModeValue, useToast, Select } from '@chakra-ui/react';
import axios from "../api/axios";
import { Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const EventCreatePage = () => {
  const [newEvent, setNewEvent] = useState({
    username: '',
    name: '',
    city: '',
    college: '',
    date: '',
    description: '',
    image: '',
  });

  const toast = useToast();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const handleCreateEvent = async() => {
    try{
        newEvent.username = user.username;

        const eventData = {
          ...newEvent,
          city: newEvent.city.toLowerCase(),
        };

        const response = await axios.post(`/api/events`, eventData);
        const {success,message} = response.data;
        if(success){
        toast({
            title: "Success",
            description: "Event created successfully",
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

  return <Container maxW={"container.sm"} py={9}>
    <VStack
      spacing={7}
    >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={1}>
        Create New Event
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={7} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
          placeholder={"Event Name"}
          name='name'
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          />

          <Input
          placeholder={"City"}
          name='city'
          value={newEvent.city}
          onChange={(e) => setNewEvent({ ...newEvent, city: e.target.value })}
          />

          <Input
          placeholder={"College"}
          name='college'
          value={newEvent.college}
          onChange={(e) => setNewEvent({ ...newEvent, college: e.target.value })}
          />

          <Input
          placeholder={"Event Date"}
          name='date'
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />

          <Select
          placeholder="Select Category"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
          >
          <option value="culturals">Culturals</option>
          <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="competition">Competition</option>
          </Select>

          <Textarea
          size="sm"
          placeholder={"Event Description"}
          name='description'
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />

          <Input
          placeholder={"Event Image URL"}
          name='image'
          value={newEvent.image}
          onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
          />
          <Button colorscheme={"blue"} onClick={handleCreateEvent} w={"full"}>
            Create Event
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
};

export default EventCreatePage;