import * as axios from "axios";

import { apiBody } from "../helpers/const";

const instanceAPI = axios.create({
  baseURL: apiBody,
});

export const appAPI = {
  getGlobalMarketInformation() {
    return instanceAPI.get(`global/`);
  },

  getCoinsData(startNumber) {
    return instanceAPI.get(`tickers/?start=${startNumber}&limit=100`);
  },
};
