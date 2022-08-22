import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedState } from "../Redux/actions/stateActions";
const StateDetail = () => {
  const state = useSelector((state) => state.state);
  const { stateId } = useParams();
  const dispatch = useDispatch();
  console.log(stateId);

  const fetchStateDetail = async () => {
    const response = await axios
      .get("https://covidnigeria.herokuapp.com/api")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedState(response.data));
  };

  useEffect(() => {
    if (stateId && stateId !== "") fetchStateDetail();
  }, [stateId]);

  return (
    <div className="StateDetail">
      <div>
        {/* Details goes in here */}
        <h2>Names</h2>
      </div>
    </div>
  );
};

export default StateDetail;
