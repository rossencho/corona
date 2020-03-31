import axios from "axios";

export const getStatistics = async () => {
  try {
    return await axios.get(`https://api.covid19api.com/summary`);
  } catch (e) {
    return e.message;
  }
};

export const getStatisticsByCountry = async country => {
  try {
    return await axios.get(
      `https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T23:13:30Z`
    );
  } catch (e) {
    return e.message;
  }
};
