import React from "react";
import { Box, Button, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Global } from "@emotion/react";

const MotionBox = motion(Box);

const EventHubLandingPage = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const navigate = useNavigate();


  const scrollToSection = (category) => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Global style to hide scrollbar but allow scroll */}
      <Global
        styles={`
          html, body {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          html::-webkit-scrollbar, 
          body::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
        `}
      />

      <Box>
        <Box
          position="relative"
          height="95vh"
          overflow="hidden"
          bgImage={
            "url('https://i.namu.wiki/i/sBY03SWAF2aUPIZBZ0cytEEmh4fhuVYBuOOACRvq15U1o1Zyn-N6wc9hON31u1FefMH2JPFcQKDafRwfFeiM7A.webp')"
          }
          bgSize="cover"
          bgPosition="center"
        >
          <VStack
            spacing={6}
            justify="center"
            align="center"
            height="100%"
            position="relative"
            zIndex={1}
            bg="rgba(0, 0, 0, 0.6)"
            color="white"
            textAlign="center"
            px={4}
          >
            <Heading as="h1" size="2xl" aria-label="Welcome to EventHub">
              Welcome to Event Besties
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Discover and register for exciting events happening around you!
            </Text>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => scrollToSection("categories-section")}
            >
              Explore Categories
            </Button>
          </VStack>
        </Box>

        <Box id="categories-section" py={20} bg={bg}>
          <Container maxW="6xl">
            <Heading as="h2" size="xl" mb={10} textAlign="center">
              Explore Event Categories
            </Heading>
            <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
                <MotionBox
                  key="Culturals"
                  p={5}
                  boxShadow="md"
                  borderRadius="md"
                  bg={useColorModeValue("white", "gray.700")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("culturals")}
                  cursor="pointer"
                >
                  <Heading size="md" mb={2}>
                    Culturals
                  </Heading>
                  <Text fontSize="sm">
                    Experience the best of music, dance, and drama. From classical performances to modern art, cultural events offer a rich diversity of entertainment.
                    </Text>
                </MotionBox>

                <MotionBox
                  key="Conferences"
                  p={5}
                  boxShadow="md"
                  borderRadius="md"
                  bg={useColorModeValue("white", "gray.700")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("conferences")}
                  cursor="pointer"
                >
                  <Heading size="md" mb={2}>
                  Conferences
                  </Heading>
                  <Text fontSize="sm">
                  Join the latest academic and industry conferences. Stay updated with cutting-edge research and new trends in various fields.
                </Text>
                </MotionBox>

                <MotionBox
                  key="Workshops"
                  p={5}
                  boxShadow="md"
                  borderRadius="md"
                  bg={useColorModeValue("white", "gray.700")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("workshops")}
                  cursor="pointer"
                >
                  <Heading size="md" mb={2}>
                  Workshops
                  </Heading>
                  <Text fontSize="sm">
                  Enhance your skills with hands-on learning. Workshops offer interactive sessions for skill development in tech, arts, and more.
                </Text>
                </MotionBox>

                <MotionBox
                  key="Competitions"
                  p={5}
                  boxShadow="md"
                  borderRadius="md"
                  bg={useColorModeValue("white", "gray.700")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("competitions")}
                  cursor="pointer"
                >
                  <Heading size="md" mb={2}>
                  Competitions
                  </Heading>
                  <Text fontSize="sm">
                  Participate and win exciting competitions. Showcase your talent and creativity in contests ranging from sports to innovation challenges.
                </Text>
                </MotionBox>
            </SimpleGrid>
          </Container>
        </Box>


        <Box
          key="Culturals"
          id="culturals"
          py={40}
          px={6}
          bg={useColorModeValue("gray.200", "gray.800")}
        >
          <Container maxW="7xl">
            <HStack spacing={10} align="center" justify="space-between" flexWrap="wrap">
              {/* Text Content */}
              <VStack align="start" spacing={4} flex="1" minW="300px">
                <Heading mb={2}>Culturals</Heading>
                <Text fontSize="lg">
                  Experience the best of music, dance, and drama. From classical performances to modern art, cultural events offer a rich diversity of entertainment.
                </Text>
                <Text fontSize="md">
                  Check out the latest events in Culturals. Whether you're into learning, networking, performing, or competing — we've got something for everyone!
                </Text>
                <Button
                  colorScheme="teal"
                  size="md"
                  onClick={() => navigate("/culturals")}
                >
                  View Cultural Events
                </Button>
              </VStack>

              {/* Image Box */}
              <Box
                flex="1"
                minW="300px"
                height="300px"
                borderRadius="md"
                overflow="hidden"
                boxShadow="lg"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JehQe8s1WqfdIRSiFzjkIyag3a65Gs5pxQ&s"
                  alt="Cultural Events"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </HStack>
          </Container>
        </Box>

          <Box
            key="Conferences"
            id="conferences"
            py={40}
            px={6}
            bg={useColorModeValue("gray.100", "gray.900")}
          >
            <Container maxW="7xl">
              <HStack spacing={10} align="center" justify="space-between" flexWrap="wrap">
                {/* Image Box on the Left */}
                <Box
                  flex="1"
                  minW="350px"
                  height="350px"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="lg"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Conference Events"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                {/* Text Content on the Right */}
                <VStack align="start" spacing={4} flex="1" minW="300px">
                  <Heading mb={2}>Conferences</Heading>
                  <Text fontSize="lg">
                  Join the latest academic and industry conferences. Stay updated with cutting-edge research and new trends in various fields.
                  </Text>
                  <Text fontSize="md">
                    Check out the latest events in Conferences. Whether you're into learning, networking, performing, or competing — we've got something for everyone!
                  </Text>
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => navigate("/conference")}
                  >
                    View Conference Events
                  </Button>
                </VStack>
              </HStack>
            </Container>
          </Box>

          <Box
          key="Workshops"
          id="workshops"
          py={40}
          px={6}
          bg={useColorModeValue("gray.200", "gray.800")}
        >
          <Container maxW="7xl">
            <HStack spacing={10} align="center" justify="space-between" flexWrap="wrap">
              {/* Text Content */}
              <VStack align="start" spacing={4} flex="1" minW="300px">
                <Heading mb={2}>Workshops</Heading>
                <Text fontSize="lg">
                Enhance your skills with hands-on learning. Workshops offer interactive sessions for skill development in tech, arts, and more.
                </Text>
                <Text fontSize="md">
                  Check out the latest events in Workshops. Whether you're into learning, networking, performing, or competing — we've got something for everyone!
                </Text>
                <Button
                  colorScheme="teal"
                  size="md"
                  onClick={() => navigate("/workshop")}
                >
                  View Workshop Events
                </Button>
              </VStack>

              {/* Image Box */}
              <Box
                flex="1"
                minW="300px"
                height="300px"
                borderRadius="md"
                overflow="hidden"
                boxShadow="lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Wikipedia_Workshop_%40_Cummins_College_for_Women%2C_Pune%2C_India_-_27.JPG"
                  alt="Workshop Events"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </HStack>
          </Container>
        </Box>

        <Box
            key="Competitions"
            id="competitions"
            py={40}
            px={6}
            bg={useColorModeValue("gray.100", "gray.900")}
          >
            <Container maxW="7xl">
              <HStack spacing={10} align="center" justify="space-between" flexWrap="wrap">
                {/* Image Box on the Left */}
                <Box
                  flex="1"
                  minW="350px"
                  height="350px"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="lg"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Competition Events"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                {/* Text Content on the Right */}
                <VStack align="start" spacing={4} flex="1" minW="300px">
                  <Heading mb={2}>Competitions</Heading>
                  <Text fontSize="lg">
                  Participate and win exciting competitions. Showcase your talent and creativity in contests ranging from sports to innovation challenges.
                  </Text>
                  <Text fontSize="md">
                    Check out the latest events in Competitions. Whether you're into learning, networking, performing, or competing — we've got something for everyone!
                  </Text>
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => navigate("/competition")}
                  >
                    View Competition Events
                  </Button>
                </VStack>
              </HStack>
            </Container>
          </Box>
      </Box>
    </>
  );
};

export default EventHubLandingPage;
