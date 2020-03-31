import React, { useReducer, createContext } from "react";
import StatisticsReducer from "./StatisticsReducer";

export const StatisticsContext = createContext();

const intialState = {
  country: "",
  statistics: []
};

const StatisticsContextProvider = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(StatisticsReducer, intialState);
  return (
    <StatisticsContext.Provider value={[state, dispatch]}>
      {children}
    </StatisticsContext.Provider>
  );
};

export default StatisticsContextProvider;
