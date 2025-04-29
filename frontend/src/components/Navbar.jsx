import React from 'react'
import { Box, Flex, Text, HStack, useColorMode, Button, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar, Tooltip, Popover, Portal, PopoverContent, PopoverHeader } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerContent, DrawerCloseButton, DrawerOverlay, DrawerHeader, DrawerFooter, Input } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { PopoverTrigger } from '@chakra-ui/react'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
import { PlusSquareIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    }

  return (
    <Box 
    w="100%" 
    px={4} 
    position="sticky"
    top="0"
    zIndex={1000}
    bg={colorMode === 'light' ? 'white' : 'gray.800'}
    >
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm: "row",
        }}
        >

            <Text
            fontSize={{ base:"22" , sm:"28" }}
            fontWeight="bold"
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip="text"
            >
                <Button  size="md" bg={colorMode === 'light' ? 'white' : 'gray.800'} onClick={ onOpen}>
                    <HamburgerIcon fontSize={20} />
                </Button>
                <Link to="/landing"><i> Event Besties</i></Link>
            </Text>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize="xl" fontWeight="bold" borderBottomWidth="1px">
                    Event Besties
                    </DrawerHeader>

                    <DrawerBody display="flex" flexDirection="column" justifyContent="space-between" p={6}>
                    <Box>
                        <Link to="/landing">
                        <Text fontSize="lg" mb={4} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                            Home
                        </Text>
                        </Link>
                        <Link to="/create">
                        <Text fontSize="lg" mb={4} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                            Create Event
                        </Text>
                        </Link>
                        <Link to="/userevents">
                        <Text fontSize="lg" mb={4} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                            Your Events
                        </Text>
                        </Link>
                        <Link to="/support">
                        <Text fontSize="lg" mb={4} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                            Help
                        </Text>
                        </Link>
                    </Box>

                    <Box>
                        <Link to="/privacy">
                        <Text fontSize="md" mb={3} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                            Privacy Policy
                        </Text>
                        </Link>
                        <Link to="/terms">
                        <Text fontSize="md" mb={3} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                            Terms of Service
                        </Text>
                        </Link>
                        <Link to="/feedback">
                        <Text fontSize="md" mb={3} cursor="pointer" _hover={{ color: 'blue.400' }} onClick={onClose}>
                        Submit Feedback
                        </Text>
                        </Link>
                        <Text fontSize="md" color="red.500" cursor="pointer" mt={4} onClick={() => { handleLogout(); onClose(); }}>
                        Logout
                        </Text>
                    </Box>
                    </DrawerBody>
                </DrawerContent>
                </Drawer>

            <HStack spacing={3} alignItems={"center"}>
                <Link to="/create">
                    <Button  size="md">
                        <PlusSquareIcon fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={ toggleColorMode } size="md">
                    {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                </Button>
                <Popover>
                    <PopoverTrigger>
                        <Wrap>
                            <WrapItem>
                                <Tooltip hasArrow label='User Settings' bg='gray.300' color='black'>
                                    <Avatar cursor="pointer" size="md" name={user.username} src={user.image ? user.image : undefined} />
                                </Tooltip>
                            </WrapItem>
                        </Wrap>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverHeader>
                                <Text fontSize="lg" fontWeight="bold" textAlign="center">
                                    {user.username}
                                </Text>
                            </PopoverHeader>
                            <Box px={4} py={2} textAlign="center">
                                <Link to="/manage">
                                    <Text cursor="pointer" mb={2}>Manage Account</Text>
                                </Link>
                                <Link to="/userevents">
                                    <Text cursor="pointer" mb={2}>Created Events</Text>
                                </Link>
                                <Link to="/support">
                                <Text cursor="pointer" mb={2}>Help</Text>
                                </Link>
                                <Text cursor="pointer" color="red.500" onClick={ handleLogout }>Logout</Text>
                            </Box>
                        </PopoverContent>
                    </Portal>
                </Popover>
            </HStack>
        </Flex>
    </Box>
  )
};

export default Navbar;