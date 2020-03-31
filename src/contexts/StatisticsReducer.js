const StatisticsReducer = (state, action) => {
  switch (action.type) {
    case "GET_STATISTICS":
      return {
        country: action.payload.country,
        statistics: action.payload.stats
      };
    case "GET_COUNTRY_STATISTICS":
      return {
        country: action.payload.country,
        statistics: action.payload.stats
      };
    default:
      return intialState;
  }
};

export default StatisticsReducer;
