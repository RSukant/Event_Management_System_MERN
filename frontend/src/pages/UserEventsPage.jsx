import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import UserEventCard from '../components/UserEventCard'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
import { useState } from 'react'

const UserEventsPage = () => {
    const [events, setEvents] = useState([]); // State to store events
    const [loading, setLoading] = useState(true); // State to manage loading state
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const fetchUserEvents = async (deletedId = null) => {
        if (deletedId) {
            // Optimistic update: remove the deleted event locally
            setEvents((prevEvents) => prevEvents.filter((e) => e._id !== deletedId));
        }

        try {
            const response = await axios.get(`/api/events/${user.username}`);
            setEvents(response.data.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    useEffect(() => {
        fetchUserEvents();
    }, []);

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize="30"
                    fontWeight="bold"
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                    textAlign="center"
                >
                    Your Events
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
                        {events.map((event) => (
                            <UserEventCard key={event._id} event={event} onUserEventUpdated={(deletedId) => fetchUserEvents(deletedId)} />
                        ))}
                    </SimpleGrid>
                )}
            </VStack>
        </Container>
        
    );
};

export default UserEventsPage;