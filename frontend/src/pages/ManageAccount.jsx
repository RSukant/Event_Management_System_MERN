import { Container, Text, VStack, Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/icons'
import { Wrap, WrapItem, Tooltip, Avatar, useColorModeValue } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ManageAccountPage = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={4}>
                <Wrap>
                    <WrapItem>
                        <Tooltip hasArrow label='User Settings' bg='gray.300' color='black'>
                            <Avatar cursor="pointer" size="2xl" name={user.username} src={user.image ? user.image : undefined} />
                        </Tooltip>
                    </WrapItem>
                </Wrap>
                <Box >
                    <VStack spacing={4}>
                            <Text fontSize="25" fontWeight="bold" color="blue.500">
                                {user.username} Account
                            </Text>
                            <Box
                                w="full"
                                display="flex"
                                maxW="500px"
                                px={6}
                                py={4}
                                justifyContent="center"
                                alignItems="center"
                                bg={useColorModeValue("white", "gray.800")}
                                rounded="lg"
                                height="80px"
                                border="2px"
                                borderColor="blue.300"
                                boxShadow="md"
                                >
                                <Text fontSize="20" fontWeight="bold" color="gray.500">
                                    Username : <Text as="i" display="inline">{user.username}</Text>
                                </Text>
                            </Box>
                            <Box
                                w="full"
                                display="flex"
                                maxW="500px"
                                px={6}
                                py={4}
                                justifyContent="center"
                                alignItems="center"
                                bg={useColorModeValue("white", "gray.800")}
                                rounded="lg"
                                height="80px"
                                border="2px"
                                borderColor="blue.300"
                                boxShadow="md"
                                >
                                <Text fontSize="20" fontWeight="bold" color="gray.500">
                                    Email : <Text as="i" display="inline">{user.email}</Text>
                                </Text>
                            </Box>
                            <Box
                                w="full"
                                display="flex"
                                maxW="500px"
                                px={6}
                                py={4}
                                justifyContent="center"
                                alignItems="center"
                                bg={useColorModeValue("white", "gray.800")}
                                rounded="lg"
                                height="80px"
                                border="2px"
                                borderColor="blue.300"
                                boxShadow="md"
                                >
                                <Text fontSize="20" fontWeight="bold" color="gray.500">
                                    Password : <Text as="i" display="inline">{'*'.repeat(user.password?.length || 8)}</Text>
                                </Text>
                            </Box>
                            <Link to="/userupdate">
                            <Box alignItems={"center"}>
                                <Button colorScheme="blue" size="lg" mt={4}>Update</Button>
                            </Box>
                            </Link>
                    </VStack>
                </Box>
            </VStack>
        </Container>
        
    );
};

export default ManageAccountPage;