import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StateComponent from "./StateComponent";
import { setStates } from "../Redux/actions/stateActions";
import axios from "axios";
import { Box, Flex, Text } from "@chakra-ui/react";

const StateListing = () => {
  const states = useSelector((state) => state.allStates.states.data?.data);
  const dispatch = useDispatch();

  const fetchStates = async () => {
    const response = await axios
      .get("https://covidnigeria.herokuapp.com/api")
      .catch((err) => {
        console.log("Err", err);
      });

    // dispatch(setStates(response));
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div className="stateListing">
      {/* <Flex mt={"2rem"} justify="space-between" align={"center"} gap="5">
        <Box
          as="div"
          bg={"#9F9A73"}
          p="4rem 8rem"
          pos={"relative"}
          color="#fff"
          fontSize={"15px"}
          borderRadius="5px"
          shadow={"dark-lg"}
        >
          <Text pos={"absolute"} top="1rem" left={"10px"}>
            Samples Tested
          </Text>
          <Text pos={"absolute"} bottom="10px" right={"10px"} fontSize={"40px"}>
            {states?.totalSamplesTested}
          </Text>
        </Box>
        <Box
          as="div"
          bg={"#0492C2"}
          p="4rem 8rem"
          pos={"relative"}
          color="#fff"
          fontSize={"15px"}
          borderRadius="5px"
          shadow={"dark-lg"}
        >
          <Text pos={"absolute"} top="1rem" left={"10px"}>
            Confirmed Cases
          </Text>
          <Text pos={"absolute"} bottom="10px" right={"10px"} fontSize={"40px"}>
            {states?.totalConfirmedCases}
          </Text>
        </Box>
        <Box
          as="div"
          bg={"#FFC82D"}
          p="4rem 8rem"
          pos={"relative"}
          color="#fff"
          fontSize={"15px"}
          borderRadius="5px"
          shadow={"dark-lg"}
        >
          <Text pos={"absolute"} top="1rem" left={"10px"}>
            Active Cases
          </Text>
          <Text pos={"absolute"} bottom="10px" right={"10px"} fontSize={"40px"}>
            {states?.totalActiveCases}
          </Text>
        </Box>

        <Box
          as="div"
          bg={"#138750"}
          p="4rem 8rem"
          pos={"relative"}
          color="#fff"
          fontSize={"15px"}
          borderRadius="5px"
          shadow={"dark-lg"}
        >
          <Text pos={"absolute"} top="1rem" left={"10px"}>
            Discharged Cases
          </Text>
          <Text pos={"absolute"} bottom="10px" right={"10px"} fontSize={"40px"}>
            {states?.discharged}
          </Text>
        </Box>
        <Box
          as="div"
          bg={"#FF0000"}
          p="4rem 8rem"
          pos={"relative"}
          color="#fff"
          fontSize={"15px"}
          borderRadius="5px"
          shadow={"dark-lg"}
        >
          <Text pos={"absolute"} top="1rem" left={"10px"}>
            Death
          </Text>
          <Text pos={"absolute"} bottom="10px" right={"10px"} fontSize={"40px"}>
            {states?.death}
          </Text>
        </Box>
      </Flex> */}

      <StateComponent />
    </div>
  );
};

export default StateListing;
