import React from "react";
import Header from "./Header";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Button,
  HStack,
} from "@chakra-ui/react";

const PaymentPort = () => {
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
      {/* Form */}

      <FormControl as="form" isRequired>
        <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
          Name on Card
        </FormLabel>
        <Input
          type="text"
          placeholder="Opara Linus Ahmed"
          border="1px solid #4E598C"
          borderRadius="10px"
          h="64px"
          fontSize="20px"
          lineHeight="30px"
          color="#4F4F4F"
          mb="44px"
        />
        <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
          Card Type
        </FormLabel>
        <Select
          borderRadius="10px"
          h="64px"
          fontSize="20px"
          lineHeight="30px"
          color="#4F4F4F"
          mb="66px"
        >
          <option selected>Visa</option>
        </Select>

        <Flex justifyContent="space-around">
          <Box mr="42px" w="391px">
            <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
              Card Details
            </FormLabel>
            <Input
              type="text"
              placeholder="44960 44960 44960 44960"
              border="1px solid #4E598C"
              borderRadius="10px"
              h="64px"
              fontSize="20px"
              lineHeight="30px"
              color="#4F4F4F"
              mb="44px"
            />
          </Box>
          <Box mr="42px">
            <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
              Expiry date
            </FormLabel>
            <Input
              type="text"
              placeholder="04 / 23"
              border="1px solid #4E598C"
              borderRadius="10px"
              h="64px"
              fontSize="20px"
              lineHeight="30px"
              color="#4F4F4F"
              mb="44px"
            />
          </Box>
          <Box>
            <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
              CVV
            </FormLabel>
            <Input
              type="text"
              placeholder="923"
              border="1px solid #4E598C"
              borderRadius="10px"
              h="64px"
              fontSize="20px"
              lineHeight="30px"
              color="#4F4F4F"
              mb="44px"
            />
          </Box>
        </Flex>

        {/* for the submit button */}

        <HStack mb={"111px"}>
          <Button
            bgGradient="linear-gradient(180deg, #f2c94c 0%, #f2994a 100%)"
            color="#F7F7FF"
            paddingInline="97px"
            paddingBlock="14px"
            lineHeight={"30px"}
            fontSize="20px"
            borderRadius="10px"
            mr={"84px"}
            _hover={{
              background: "linear-gradient(180deg, #f2c94c 0%, #f2994a 100%)",
            }}
          >
            Next
          </Button>

          <Text
            color="#4E598C"
            lineHeight={"30px"}
            fontSize="20px"
            cursor="pointer"
          >
            Cancel Payment
          </Text>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default PaymentPort;
