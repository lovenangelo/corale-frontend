import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://206.189.147.71/ecommerce/coral-ecommerce-api/public",
  baseURL: "http://localhost:8000",
  headers: {
    common: {
      Accept: "application/json",
    },
  },
  withCredentials: true,
});

export default axiosClient;
