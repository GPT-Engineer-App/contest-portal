import { Box, Button, Container, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Link, Spacer, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaTrophy } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Menu */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={4}>
        <Heading as="h1" size="lg">
          Afrisolve
        </Heading>
        <Spacer />
        <Stack direction="row" spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Contest</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Rules and Regulation</Link>
          <Link href="#">Terms and Conditions</Link>
        </Stack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={4} align="stretch" p={4}>
        {/* Description and Images */}
        <Box>
          <Heading as="h2" size="md">
            Welcome to Afrisolve
          </Heading>
          <Text mt={2}>Afrisolve is a platform for creative problem solvers across Africa to showcase their innovative ideas and compete for amazing prizes.</Text>
          <Wrap spacing={4} mt={4}>
            <WrapItem>
              <Image src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3MDkwNzQ0NjR8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" objectFit="cover" />
            </WrapItem>
            <WrapItem>
              <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVjaG5vbG9neSUyMGNvbXBldGl0aW9ufGVufDB8fHx8MTcwOTA3NDQ2NHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" objectFit="cover" />
            </WrapItem>
            <WrapItem>
              <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZW50cmVwcmVuZXVyfGVufDB8fHx8MTcwOTA3NDQ2NHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" objectFit="cover" />
            </WrapItem>
          </Wrap>
        </Box>

        {/* Contest Buttons */}
        <Flex justifyContent="center" mt={4}>
          <Button colorScheme="teal" mr={4} leftIcon={<FaPlus />}>
            Enter Contest
          </Button>
          <Button colorScheme="orange" leftIcon={<FaTrophy />}>
            See Winning Contestants
          </Button>
        </Flex>

        {/* Search Bar */}
        <InputGroup mt={4}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search for contestants" />
        </InputGroup>

        {/* Top 3 Contestants */}
        <Box mt={4}>
          <Heading as="h3" size="sm">
            Top 3 Contestants
          </Heading>
          <Wrap spacing={4} mt={2}>
            {/* Placeholder for top contestants */}
            <WrapItem>
              <Text>1. Contestant A</Text>
            </WrapItem>
            <WrapItem>
              <Text>2. Contestant B</Text>
            </WrapItem>
            <WrapItem>
              <Text>3. Contestant C</Text>
            </WrapItem>
          </Wrap>
        </Box>

        {/* New Contestants */}
        <Box mt={4}>
          <Heading as="h3" size="sm">
            New Contestants
          </Heading>
          <Wrap spacing={4} mt={2}>
            {/* Placeholder for new contestants */}
            <WrapItem>
              <Text>Contestant D</Text>
            </WrapItem>
            <WrapItem>
              <Text>Contestant E</Text>
            </WrapItem>
            <WrapItem>
              <Text>Contestant F</Text>
            </WrapItem>
          </Wrap>
        </Box>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.100" p={4} mt={4}>
        <Flex justify="space-between" align="center">
          <Text>Contest Awards</Text>
          <Text>&copy; {new Date().getFullYear()} Afrisolve. All rights reserved.</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
