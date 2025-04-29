import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
  
  const PrivacyPolicyPage = () => {
    return (
      <Box py={16}>
        <Container maxW="container.md">
          <VStack spacing={6} align="start">
            <Heading as="h1" size="xl" textAlign="left">
              Privacy Policy
            </Heading>
  
            <Text fontSize="md" color="gray.600">
              Last updated: April 13, 2025
            </Text>
  
            <Text>
              At <strong>Event Besties</strong>, we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>1. Information We Collect</Heading>
            <Text>
              We may collect personal information such as your name, email address, location, and event preferences when you use our platform or create an account.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>2. How We Use Your Information</Heading>
            <Text>
              We use your information to:
              <ul style={{ paddingLeft: '20px' }}>
                <li>Provide and maintain our service</li>
                <li>Improve your user experience</li>
                <li>Send updates and notifications</li>
                <li>Respond to support requests</li>
              </ul>
            </Text>
  
            <Heading as="h2" size="md" pt={4}>3. Sharing of Information</Heading>
            <Text>
              We do not sell, trade, or rent your personal information. Your data is only shared with third parties when necessary to operate the platform (e.g., payment providers, hosting).
            </Text>
  
            <Heading as="h2" size="md" pt={4}>4. Security</Heading>
            <Text>
              We implement standard security practices to protect your data. However, no online platform is 100% secure, so we encourage users to be cautious.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>5. Your Rights</Heading>
            <Text>
              You may request to access, modify, or delete your personal data by contacting our support team.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>6. Updates to This Policy</Heading>
            <Text>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated date.
            </Text>
  
            <Heading as="h2" size="md" pt={4}>7. Contact Us</Heading>
            <Text>
              If you have questions about this Privacy Policy, please contact us at <strong>support@eventbesties.com</strong>.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default PrivacyPolicyPage;
  