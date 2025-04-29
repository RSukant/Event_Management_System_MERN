import { Container, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack, Button } from '@chakra-ui/react'
import { SearchIcon, Box, useColorModeValue } from '@chakra-ui/icons'
import { useEffect } from 'react'
import EventCard from '../components/EventCard'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const CulturalsHomePage = () => {
    const [city, setCity] = useState(''); // State to store location input
    const [events, setEvents] = useState([]); // State to store events
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 15;
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
    const totalPages = Math.ceil(events.length / eventsPerPage);
    const category = "culturals";

    const fetchEventsByCity = async () => {
        try{
            const cityQuery = city.trim().toLowerCase();
            const response = await axios.get(`/api/events/location/${cityQuery}`);
            setEvents(response.data.data || []);
        } catch(error){
            console.error('Error fetching events:', error);
            setEvents([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchEventsByCategory = async () => {
        try {
            const response = await axios.get(`/api/events/type/${category}`);
            setEvents(response.data.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    useEffect(() => {
        fetchEventsByCategory();
    }, []);

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <InputGroup size="md" width="35%">
                    <Input
                        type="text"
                        pr='4.5rem'
                        placeholder='Search Events By City'
                        value={city}
                        size="lg"
                        borderColor={useColorModeValue("gray.300", "gray.600")}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <InputRightElement width="3.5rem" top="50%" transform="translateY(-50%)">
                        <Button h='2.40rem' onClick={fetchEventsByCity} bg={useColorModeValue("blue.600", "blue.300")} color="white" _hover={{ bg: useColorModeValue("blue.700", "blue.400") }}>
                            <SearchIcon/>
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Text
                    fontSize="30"
                    fontWeight="bold"
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                    textAlign="center"
                >
                    Current Events
                </Text>
                {loading ? (
                    <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
                        Loading events...
                    </Text>
                ) : events.length === 0 ? (
                    <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
                        No events available{' '}
                        <Link to="/create">
                            <Text as="span" color="blue.500" _hover={{ textDecoration: 'underline' }}>
                                Create Event
                            </Text>
                        </Link>
                    </Text>
                ) : (
                    <SimpleGrid
                        columns={{
                            base: 1,
                            md: 2,
                            lg: 3,
                        }}
                        spacing={10}
                        w="full"
                    >
                        {currentEvents.map((event) => (
                            <EventCard key={event._id} event={event} onEventUpdated={fetchEventsByCategory} />
                        ))}

                    </SimpleGrid>
                )}
                <Box display="flex" justifyContent="center" mt={6} gap={4}>
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        isDisabled={currentPage === 1}
                    >
                        Prev
                    </Button>
                    <Text alignSelf="center">Page {currentPage} of {totalPages}</Text>
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        isDisabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                    </Box>
            </VStack>
        </Container>
        
    );
};

export default CulturalsHomePage;