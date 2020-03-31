import React, { useState, useContext, useEffect } from "react";
import { StatisticsContext } from "../contexts/StatisticsContext";
import { getStatistics } from "../services/getStatistics";

const Search = () => {
  const [state, dispatch] = useContext(StatisticsContext);
  const [userInput, setUserInput] = useState("");
  const [country, setCountry] = useState("");
  const [summary, setSummary] = useState([]);

  const loadStatistics = async () => {
    let res = await getStatistics();
    setSummary(res.data.Countries);
    dispatch({
      type: "GET_STATISTICS",
      payload: { country: -1, stats: res.data.Countries }
    });
  };

  useEffect(() => {
    loadStatistics();
  }, [country]);

  const onChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
    if (summary !== undefined) {
      const data = summary.filter(item => {
        return item.Country.toLowerCase().includes(e.target.value);
      });
      dispatch({
        type: "GET_COUNTRY_STATISTICS",
        payload: { country: e.target.value, stats: data }
      });
    }
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
