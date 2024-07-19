import axios from "axios";

export const getGlobalMarketStatus = (url: string) => {
  return axios.get(url);
};
