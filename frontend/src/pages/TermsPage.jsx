import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
  
  const TermsPage = () => {
    return (
      <Box py={16} bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW="container.md">
          <VStack spacing={6} align="start">
            <Heading as="h1" size="xl" textAlign="left">
              Terms & Conditions
            </Heading>
  
            <Text fontSize="md" color="gray.600">
              Last updated: April 13, 2025
            </Text>
  
            <Text>
              Welcome to <strong>Event Besties</strong>. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>1. Acceptance of Terms</Heading>
            <Text>
              By registering or using our services, you agree to be bound by these Terms of Use and our Privacy Policy.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>2. Use of the Platform</Heading>
            <Text>
              You agree to use Event Besties only for lawful purposes and in a way that does not infringe on the rights of others.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>3. User Accounts</Heading>
            <Text>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>4. Event Posting and Content</Heading>
            <Text>
              All content you post (including events, images, and descriptions) must comply with our community standards. Event Besties reserves the right to remove any content deemed inappropriate or in violation of our policies.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>5. Termination</Heading>
            <Text>
              We reserve the right to suspend or terminate your access to the platform at our discretion, without notice, for conduct that violates these Terms.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>6. Disclaimer</Heading>
            <Text>
              Our platform is provided "as-is" and "as available". We do not guarantee that the service will be uninterrupted or error-free.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>7. Changes to Terms</Heading>
            <Text>
              Event Besties may update these Terms at any time. Continued use of the service after changes constitutes acceptance of those changes.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>8. Contact Us</Heading>
            <Text>
              For questions regarding these Terms & Conditions, please contact us at <strong>support@eventbesties.com</strong>.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default TermsPage;
  