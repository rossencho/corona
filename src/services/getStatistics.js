import axios from "axios";

export const getStatistics = async () => {
  try {
    return await axios.get(`https://api.covid19api.com/summary`);
  } catch (e) {
    return e.message;
  }
};

export const getNewConfirmed = async (country) => {
  try {
    return await axios.get(
      `https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`
    );
  } catch (e) {
    return e.message;
  }
};
