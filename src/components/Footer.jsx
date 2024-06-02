import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white" mt={10}>
      <Text>&copy; 2024 John Doe. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
