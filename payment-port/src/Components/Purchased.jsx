import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import checkmark from "../assets/checkmark.svg";
import { useNavigate, Link } from "react-router-dom";

const Purchased = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <Box
      as="section"
      pl="400px"
      pr="336px"
      pos="relative"
      minH="100vh"
      className="container"
    >
      <Box
        as="div"
        w="801px"
        h="480px"
        bg="#fff"
        rounded="10px"
        boxShadow="0px 6px 10px rgba(33, 30, 67, 0.08)"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Box
          className="circle"
          w="84px"
          h="84px"
          boxShadow="0px 6px 10px rgba(33, 30, 67, 0.08)"
          rounded="100%"
          mt="67px"
          mb="5px"
          pos="relative"
          top="10%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Image
            src={checkmark}
            w="47.1px"
            h="33.98px"
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        </Box>
        <Text
          mt="10px"
          fontSize="48px"
          color="#4E598C"
          lineHeight="67px"
          mb="30px"
          ml="150px"
        >
          Purchase Completed
        </Text>

        <Text
          fontSize="20px"
          color="#4F4F4F"
          lineHeight="30px"
          fontWeight="400"
          ml="150px"
          pr="247px"
        >
          Please check your email for details concerning this transaction
        </Text>

        <Box
          href="#"
          className="active"
          pl="150px"
          display="block"
          mt="38px"
          onClick={handleSubmit}
        >
          Return Home
        </Box>
      </Box>
    </Box>
  );
};

export default Purchased;
