import React from 'react'
import { Box, Heading, IconButton, Image, HStack, Text, useColorModeValue, useToast, Modal, useDisclosure, ModalBody } from '@chakra-ui/react'
import { Input, VStack } from '@chakra-ui/react'
import { ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter, Button } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { EditIcon, DeleteIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton } from '@chakra-ui/react';


const UserEventCard = ({ event, onUserEventUpdated }) => {
    const [updatedEvent, setUpdatedEvent] = useState(event);
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const { isOpen: isImageModalOpen, onOpen: onImageModalOpen, onClose: onImageModalClose } = useDisclosure();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
    const toast = useToast();

    const handleDeleteEvent = async (eid) => {
        try {
            const response = await axios.delete(`/api/events/${eid}`);
            const { success, message } = response.data;

            if (success) {
                toast({
                    title: 'Success',
                    description: message,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                onUserEventUpdated(eid); // Notify parent to re-fetch events
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

    const handleUpdateEvent = async (eid, updatedEvent) => {
        try {
            const response = await axios.put(`/api/events/${eid}`, updatedEvent);
            const { success, message } = response.data;

            onClose();

            if (success) {
                toast({
                    title: 'Success',
                    description: 'Event updated successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                onUserEventUpdated(); // Notify parent to re-fetch events
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

    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
            bg={bg}
        >
            <Image src={event.image} alt={event.name} h="48" w="full" objectFit="cover" cursor="pointer" onClick={onImageModalOpen}/>

            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {event.name}
                </Heading>
                <Text fontSize="xl" color={textColor} mb={1}>
                    Date : {event.date}
                </Text>
                <Text fontSize="xl" color={textColor} mb={3}>
                    City : {event.city}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteEvent(event._id)} colorScheme="red" />
                    <IconButton icon={<InfoOutlineIcon />} onClick={onDrawerOpen} colorScheme="green" />

                </HStack>
            </Box>

            <Modal isOpen={isImageModalOpen} onClose={onImageModalClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bg="transparent" boxShadow="none">
            <ModalCloseButton color="white" />
            <Image
                src={event.image}
                alt={event.name}
                borderRadius="md"
                maxH="90vh"
                mx="auto"
                objectFit="contain"
            />
            </ModalContent>
            </Modal>

            <Drawer
                isOpen={isDrawerOpen}
                placement='right'
                size={"sm"}
                onClose={onDrawerClose}
            >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Event Description</DrawerHeader>
            <DrawerBody>
                <Text fontWeight={'bold'}>College : {event.college}</Text>
                <Text fontWeight={'bold'} mt={4}>Event Information : </Text>
                <Text whiteSpace="pre-wrap">{event.description}</Text>
            </DrawerBody>
            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onDrawerClose}>
                    Cancel
                </Button>
            </DrawerFooter>
            </DrawerContent>
            </Drawer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Event</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Event Name"
                                name="name"
                                value={updatedEvent.name || ''}
                                onChange={(e) => setUpdatedEvent({ ...updatedEvent, name: e.target.value })}
                            />
                            <Input
                                placeholder="Event City"
                                name="city"
                                value={updatedEvent.city || ''}
                                onChange={(e) => setUpdatedEvent({ ...updatedEvent, city: e.target.value })}
                            />
                            <Input
                                placeholder="Event Date"
                                name="date"
                                value={updatedEvent.date || ''}
                                onChange={(e) => setUpdatedEvent({ ...updatedEvent, date: e.target.value })}
                            />
                            <Input
                                placeholder="Event Description"
                                name="description"
                                value={updatedEvent.description || ''}
                                onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })}
                            />
                            <Input
                                placeholder="Event Image URL"
                                name="image"
                                value={updatedEvent.image || ''}
                                onChange={(e) => setUpdatedEvent({ ...updatedEvent, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => handleUpdateEvent(event._id, updatedEvent)}>
                            Update
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default UserEventCard;