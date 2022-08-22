import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const StateComponent = () => {
  const states = useSelector((state) => state.allStates.states.data?.states);
  const renderList = states?.map((stateCovid) => {
    const { casesOnAdmission, state, _id, confirmedCases, death, discharged } =
      stateCovid;
    return (
      <div className="StateComponent" key={_id}>
        <Link to={`/state/${_id}`}>
          <Box border="1px solid red">
            <h2>{casesOnAdmission}</h2>
            <h2>{state}</h2>
            <h2>{confirmedCases}</h2>
            <h2>{death}</h2>
            <h2>{discharged}</h2>
          </Box>
        </Link>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default StateComponent;
