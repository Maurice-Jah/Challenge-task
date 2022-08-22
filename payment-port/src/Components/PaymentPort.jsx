import React, { useState } from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();

  const initialValue = {
    name: "",
    expiryDate: "",
    cardDetails: "",
    cvv: "",
  };

  const [userData, showUserData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    showUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    navigate("/payment");
  };
  return (
    <Box className="container">
      <Box as="section" pl="400px" pr="336px">
        <Header />

        {/* Form */}
        <FormControl as="form" isRequired>
          <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
            Name on Card
          </FormLabel>
          <Input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Opara Linus Ahmed"
            border="1px solid #4E598C"
            borderRadius="10px"
            h="64px"
            fontSize="20px"
            lineHeight="30px"
            color="#4F4F4F"
            mb="44px"
            paddingBlock={"17px"}
            paddingInline={"27px"}
            bg={"#FFFFFF"}
          />
          <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="16px">
            Card Type
          </FormLabel>
          <Select
            name="select"
            value={userData.select}
            onChange={handleChange}
            borderRadius="10px"
            h="64px"
            fontSize="20px"
            lineHeight="30px"
            color="#4F4F4F"
            mb="66px"
            bg={"#fff"}
          >
            <option>Visa</option>
          </Select>

          <Flex justifyContent="space-around">
            <Box mr="42px" w="391px">
              <FormLabel
                color="#000"
                fontSize="20px"
                lineHeight="30px"
                mb="16px"
              >
                Card Details
              </FormLabel>
              <Input
                type="text"
                name="cardDetails"
                value={userData.cardDetails}
                onChange={handleChange}
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
              <FormLabel
                color="#000"
                fontSize="20px"
                lineHeight="30px"
                mb="16px"
              >
                Expiry date
              </FormLabel>
              <Input
                type="text"
                name="expiryDate"
                value={userData.expiryDate}
                onChange={handleChange}
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
              <FormLabel
                color="#000"
                fontSize="20px"
                lineHeight="30px"
                mb="16px"
              >
                CVV
              </FormLabel>
              <Input
                type="text"
                name="cvv"
                value={userData.cvv}
                onChange={handleChange}
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
              onClick={handleSubmit}
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
    </Box>
  );
};

export default PaymentPort;
