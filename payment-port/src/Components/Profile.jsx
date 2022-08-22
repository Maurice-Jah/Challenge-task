import React, { useState } from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";
import "../../src/index.css";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Button,
  FormHelperText,
  HStack,
} from "@chakra-ui/react";

const Profile = () => {
  const navigate = useNavigate();

  const initialValue = {
    name: "",
    email: "",
    address1: "",
    address2: "",
    lga: "",
    select: "",
  };

  const [userData, showUserData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    showUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    navigate("/paymentPort");
  };

  return (
    <Box as="section" pl="400px" pr="336px" className="container">
      <Header />
      {/* Form  */}
      <FormControl as="form" isRequired>
        <FormLabel
          color="#000"
          fontSize="20px"
          lineHeight="30px"
          mb="16px"
          requiredIndicator
        >
          Name
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
          bg={"#fff"}
        />
        <FormLabel color="#000" fontSize="20px" lineHeight="30px" mb="11px">
          Email Address
        </FormLabel>
        <FormHelperText
          fontWeight={"400px"}
          fontSize="16px"
          lineHeight="24px"
          color="#817E9E"
          mb="24px"
        >
          The purchase reciept would be sent to this address
        </FormHelperText>
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="OparaLinusAhmed@devmail.com"
          border="1px solid #4E598C"
          borderRadius="10px"
          h="64px"
          fontSize="20px"
          lineHeight="30px"
          color="#4F4F4F"
          mb="60px"
          bg={"#fff"}
        />
        <FormLabel
          color="#000"
          fontSize="20px"
          lineHeight="30px"
          mb="16px"
          requiredIndicator
        >
          Address 1
        </FormLabel>
        <Input
          type="text"
          name="address1"
          value={userData.address1}
          onChange={handleChange}
          placeholder="Opara Linus Ahmed"
          border="1px solid #4E598C"
          borderRadius="10px"
          h="64px"
          fontSize="20px"
          lineHeight="30px"
          color="#4F4F4F"
          mb="49px"
          bg={"#fff"}
        />

        <FormLabel
          color="#000"
          fontSize="20px"
          lineHeight="30px"
          mb="16px"
          requiredIndicator
        >
          Address 2
        </FormLabel>
        <Input
          type="text"
          name="address2"
          value={userData.address2}
          onChange={handleChange}
          placeholder="and here"
          border="1px solid #4E598C"
          borderRadius="10px"
          h="64px"
          fontSize="20px"
          lineHeight="30px"
          color="#4F4F4F"
          mb="66px"
          bg={"#fff"}
        />

        <Flex alignItems={"center"} gap="33px" mb={"80px"}>
          <Box width="100%">
            <FormLabel
              color="#000"
              fontSize="20px"
              lineHeight="30px"
              mb="16px"
              requiredIndicator
            >
              Local Government
            </FormLabel>
            <Input
              type="text"
              name="lga"
              value={userData.lga}
              onChange={handleChange}
              placeholder="Surulere"
              border="1px solid #4E598C"
              borderRadius="10px"
              h="64px"
              fontSize="20px"
              lineHeight="30px"
              color="#4F4F4F"
              mb="66px"
              bg={"#fff"}
            />
          </Box>

          <Box width="260px">
            <FormLabel
              color="#000"
              fontSize="20px"
              lineHeight="30px"
              mb="16px"
              requiredIndicator
            >
              State
            </FormLabel>
            <Select
              placeholder="Select State"
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
              border="1px solid #4E598C"
            >
              <option>Lagos</option>
            </Select>
          </Box>
        </Flex>
      </FormControl>

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
    </Box>
  );
};

export default Profile;
