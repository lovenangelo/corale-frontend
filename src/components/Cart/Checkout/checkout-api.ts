import axiosClient from "@/lib/axios";
import { Order, OrderWithAddress } from "./order-type";

export const createAddress = async (address: {
  fullname: string;
  mobile_number: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
}) => {
  return await axiosClient.post("/api/order/address", address);
};

export const getAddresses = async () => {
  return await axiosClient.get("/api/order/address");
};

export const deleteAddress = async (id: number) => {
  return await axiosClient.delete(`/api/order/address/${id}`);
};

export const placeOrder = async (order: Order | OrderWithAddress) => {
  const res = await axiosClient.post("/api/orders", order);
  console.log(res);
};

export const getOrders = async () => {
  return await axiosClient.get("/api/orders");
};
