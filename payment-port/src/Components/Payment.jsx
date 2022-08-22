import React from "react";
import Header from "./Header";
import Buttons from "./Buttons";
import { Box, Flex, Text } from "@chakra-ui/react";

const Payment = () => {
  return (
    <Box
      as="section"
      pl="400px"
      pr="336px"
      backgroundImage="url('bg.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Header />

      <Box
        w="756px"
        mb="69px"
        pb="41px"
        rounded="10px"
        bg="#ffff"
        boxShadow="0px 10px 15px rgba(33, 30, 67, 0.08)"
      >
        <Flex
          as="div"
          pl="80px"
          pr="130px"
          justify="space-between"
          align="center"
          bg="#2F80ED"
          color="#fff"
          fontSize="20px"
          lineHeight="30px"
          borderRadius="16px 10px 0px 0px"
        >
          <Text pt="20px" pb="20px">
            Item Name
          </Text>
          <Text pt="20px" pb="20px">
            N Price
          </Text>
        </Flex>
        <Box
          as="div"
          ml="42px"
          mr="26px"
          pl="38px"
          pr="104px"
          mt="62px"
          color="#4E598C"
          borderBottom="1px solid #817E9E"
        >
          <Flex justify="space-between" align="center">
            <Text pt="20px" mb="40px">
              Data science and usability
            </Text>
            <Text pt="20px" mb="40px">
              50,000.00
            </Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Text pt="20px" mb="37px">
              50,000.00
            </Text>
            <Text pt="20px" mb="37px">
              0.00
            </Text>
          </Flex>
        </Box>
        <Flex
          align="center"
          justify="space-between"
          border="1px solid #817E9E"
          mt="39px"
          ml="61px"
          mr="80px"
          paddingBlock="14px"
          paddingInline="19px"
          rounded="5px"
          fontSize="20px"
          lineHeight="30px"
        >
          <Text color="#817E9E" fontWeight="normal">
            Total
          </Text>
          <Text color="#4E598C" mr="30px">
            50,000.00
          </Text>
        </Flex>
      </Box>
      <Buttons title="Pay" />
    </Box>
  );
};

export default Payment;
