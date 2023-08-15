import axios from "axios";
import https from "https";

const axiosClient = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL: "http://206.189.147.71/ecommerce/coral-ecommerce-api/public",
  headers: {
    common: {
      Accept: "application/json",
    },
  },
  withCredentials: true,
});

export default axiosClient;
