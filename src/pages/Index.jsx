import { Container, VStack, HStack, Box, Text, Heading, IconButton, Image, Tag } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="center">
        <Box boxSize="150px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1531496681078-27dc2277e898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcm9udGVuZCUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzMzOTg3OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Frontend Developer
        </Text>
        <HStack spacing={4}>
          <IconButton as="a" href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          <IconButton as="a" href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton as="a" href="mailto:johndoe@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" />
        </HStack>
        <Box textAlign="center">
          <Heading as="h2" size="md" mb={4}>
            Skills
          </Heading>
          <HStack spacing={4} justify="center">
            <Tag size="lg" colorScheme="teal">
              HTML
            </Tag>
            <Tag size="lg" colorScheme="teal">
              CSS
            </Tag>
          </HStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="md" mb={4}>
            About Me
          </Heading>
          <Text maxW="600px">I am a passionate frontend developer with a strong foundation in HTML and CSS. I enjoy creating beautiful and functional web interfaces that provide a great user experience. I am always eager to learn new technologies and improve my skills.</Text>
        </Box>
      </VStack>
      <Footer />
    </Container>
  );
};

export default Index;
