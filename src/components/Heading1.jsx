import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
function Heading1() {
  return (
    <Box>
      <Heading>Modern online and offline payments for Africa</Heading>
      <Text>
        Paystack helps businesses in Africa get paid by anyone, anywhere in the
        world
      </Text>
      <Button colorScheme="green">Create a react account</Button>
      <Heading size="lg" fontSize="50px" colorScheme="blackAlpha">
        I'm overriding this heading
      </Heading>
      <Box maxW="32rem">
        <Heading mb={4}>Modern online and offline payments for Africa</Heading>
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Box>
    </Box>
  );
}

export default Heading1;
