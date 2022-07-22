import { Container, Heading, Box } from "@chakra-ui/react";
import React from "react";

const Pricing = () => {
  return (
    <Container bgColor="#fff8f1" maxW="100%" h="auto" p="5%">
      <br />
      <Box>
        <Heading
          fontWeight="simple"
          size="3xl"
          color="#1d1e1c"
          textAlign="left"
        >
          Simple, flexible pricing
        </Heading>
      </Box>
      <br />
      <Box>
        <Heading fontWeight="light" size="lg" color="#1d1e1c" textAlign="left">
          Every plan includes every feature, and can scale as your team does.
        </Heading>
      </Box>
      <br />
      <br />
    </Container>
  );
};

export default Pricing;
