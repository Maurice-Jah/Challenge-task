import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StateComponent from "./StateComponent";
import { setStates } from "../Redux/actions/stateActions";
import axios from "axios";

const StateListing = () => {
  const states = useSelector((state) => state);
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

  console.log("States", states);
  return (
    <div className="stateListing">
      <div>
        <StateComponent />
      </div>
    </div>
  );
};

export default StateListing;
