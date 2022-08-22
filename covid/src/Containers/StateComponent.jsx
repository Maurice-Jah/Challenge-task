import React, { useEffect } from "react";
import axios from "axios";
import { setStates } from "../Redux/actions/stateActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const StateComponent = () => {
  const states = useSelector((state) => state.allStates.states.data?.states);
  const dispatch = useDispatch();

  const fetchStates = async () => {
    const response = await axios
      .get("https://covidnigeria.herokuapp.com/api")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setStates(response.data));
  };

  useEffect(() => {
    fetchStates();
  }, []);
  const renderList = states?.map((stateCovid) => {
    const { casesOnAdmission, state, _id, confirmedCases, death, discharged } =
      stateCovid;
    return (
      <Tr className="StateComponent" key={_id} color="#000" bg={"#fff"}>
        <Td>{state}</Td>
        <Td>{confirmedCases}</Td>
        <Td>{casesOnAdmission}</Td>
        <Td>{discharged}</Td>
        <Td>{death}</Td>
      </Tr>
    );
  });

  {
    /* <Link to={`/state/${_id}`}> */
  }

  return (
    <div>
      <Text
        mt="5rem"
        mb={"2rem"}
        textAlign="center"
        fontSize={"30px"}
        fontWeight="bold"
      >
        Confirmed Cases by State
      </Text>
      <TableContainer>
        <Table variant="striped" colorScheme={"blackAlpha"}>
          <Thead>
            <Tr bg={"#138750"}>
              <Th color="#fff" paddingBlock="1rem">
                States Affected
              </Th>
              <Th color="#fff" paddingBlock="1rem">
                No. of Cases (Lab Confirmed)
              </Th>
              <Th color="#fff" paddingBlock="1rem">
                No. of Cases (on admission)
              </Th>
              <Th color="#fff" paddingBlock="1rem">
                No. Discharged
              </Th>
              <Th color="#fff" paddingBlock="1rem">
                No. of Deaths
              </Th>
            </Tr>
          </Thead>
          <Tbody>{renderList}</Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StateComponent;
