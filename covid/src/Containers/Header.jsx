import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Box shadow={"md"} p={"3rem"} bg="#fff" rounded={"10px"}>
        <Heading as="h1" color="#000" fontSize={"40px"}>
          COVID-19 NIGERIA
        </Heading>
      </Box>
    </div>
  );
};

export default Header;
