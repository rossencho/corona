import axios from "axios";

export const getStatistics = async () => {
  try {
    return await axios.get(`https://api.covid19api.com/summary`);
  } catch (e) {
    return e.message;
  }
};
