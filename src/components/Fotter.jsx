import { Box, Center, Divider, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgBoy } from "react-icons/cg";

function Fotter() {
  return (
    <div>
      <HStack mx={190} spacing={9} mt={3}>
        <Box width={300}>
          <HStack>
            <CgBoy fontSize={30} color="blue" />
            <Text fontWeight={700} fontSize={20}>
              Geeks
            </Text>
          </HStack>

          <Text color="GrayText" fontSize={13} mt={2}>
            Geek is feature-rich components and beautifully Bootstrap UIKit for
            developers built with bootstap responsive framework.
          </Text>
          <HStack mt={5} pb={5}>
            <BsFacebook color="gray" />
            <AiFillTwitterCircle color="gray" />
            <AiOutlineInstagram color="gray" />
          </HStack>
        </Box>
        <Box width={130} p={3} pb={6}>
          <Text fontWeight={700} fontSize={15}>
            Company
          </Text>
          <Text fontSize={13} mt={2} color="GrayText">
            About
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Pricing
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Blog
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Careers
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Contact
          </Text>
        </Box>
        <Box width={140}>
          <Text fontWeight={700} fontSize={15}>
            Support
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Help and Support
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Become Instructor
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Get the app
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            FAQ's
          </Text>
          <Text fontSize={13} mt={1.5} color="GrayText">
            Tutorial
          </Text>
        </Box>
        <Box width={268} pb={6}>
          <Text fontWeight={700} fontSize={15}>
            Get in touch
          </Text>
          <Text fontSize={13} mt={2} color="GrayText">
            339 McDermott Points Hettingerhaven,NV 15283
          </Text>
          <Text fontSize={13} mt={2} color="GrayText">
            Email: <Link color="blue">support@geeksui.com</Link>
          </Text>
          <Text fontSize={13} mt={2} color="GrayText">
            Phone :{" "}
            <Link color="#000" sx={{ fontWeight: 600 }}>
              (000) 123 456789
            </Link>
          </Text>
          <Divider color="#000" />
        </Box>
      </HStack>
      <Center mt={10}>
        <Divider w={810} />
      </Center>

      <Center my={1}>
        <HStack fontSize={12} spacing={10}>
          <Text mr={27}>@ 2022 Geeks-UI, Inc. All Rights Reserved</Text>
          <Text>Privacy Policy</Text>
          <Text>Cookie Notice</Text>
          <Text>Do Not Sell My Personal Information </Text>
          <Text>Terms of Use</Text>
        </HStack>
      </Center>
    </div>
  );
}

export default Fotter;
