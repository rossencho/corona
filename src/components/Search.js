import React, { useState, useContext, useEffect } from "react";
import { StatisticsContext } from "../contexts/StatisticsContext";
import {
  getStatistics,
  getStatisticsByCountry
} from "../services/getStatistics";
import "./Table.scss";

const Search = () => {
  const [state, dispatch] = useContext(StatisticsContext);
  const [userInput, setUserInput] = useState("");
  const [country, setCountry] = useState("");
  const [summat, setSummary] = useState([]);

  const loadStatisByCountry = async () => {
    let res = await getStatisticsByCountry(country);
    dispatch({
      type: "GET_COUNTRY_STATISTICS",
      payload: { country, stats: res.data }
    });
  };

  const loadStatistics = async () => {
    let res = await getStatistics();
    setSummary(res.data.Countries);
    dispatch({
      type: "GET_STATISTICS",
      payload: { country: -1, stats: res.data.Countries }
    });
  };

  useEffect(() => {
    country.length ? loadStatisByCountry() : loadStatistics();
  }, [country]);

  const onChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setCountry(userInput);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Country..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Punch the country you want
        </button>
      </form>
    </div>
  );
};

export default Search;
