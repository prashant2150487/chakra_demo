import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function MainComp() {
  return (
    <Box>
      <Text
        textAlign="center"
        color="blue"
        fontWeight={500}
        fontSize="0.8rem"
        mt={2}
      >
        NEED TO KNOW
      </Text>
      <Heading
        as="h1"
        size="4xl"
        fontSize="27px"
        fontWeight={700}
        textAlign="center"
        mt={3}
      >
        Frequently asked question.
      </Heading>
      <Center>
        <Text textAlign="center" w={600}>
          Lorem ipsum dolor sit amet, consecteltur adiplscing elit.In mattis non
          accumsan In, tempor dictum neque.
        </Text>
      </Center>
      <Center mt={65}>
        <VStack w={430}>
          <InputGroup>
            <Input
              variant="flushed"
              placeholder="What is the cost of online course"
              _placeholder={{ color: "#000", fontWeight: 800, fontSize: 14 }}
            />
            <InputRightElement children={<AiOutlinePlus color="blue" />} />
          </InputGroup>
          <Text fontSize={13} color="gray">
            Create beautiful website with this Geeks UI template.Get started
            building a site today.
          </Text>
          <InputGroup>
            <Input
              variant="flushed"
              placeholder="What do I need to take a course ?"
              _placeholder={{ color: "#000" }}
              sx={{ fontWeight: 800, color: "#000", fontSize: 14 }}
            />
            <InputRightElement children={<AiOutlinePlus color="blue" />} />
          </InputGroup>
        </VStack>
      </Center>
      <Center my={10}>
        <Text
          sx={{ border: "1px solid #ccc", borderRadius: 3 }}
          fontSize={12}
          p={2}
          px={4}
          fontWeight={500}
        >
          More questions? Visit the{" "}
          <Link color="blue" href="#">
            Learner Help Center
          </Link>
        </Text>
      </Center>
    </Box>
  );
}

export default MainComp;
