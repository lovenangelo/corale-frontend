export type Order = {
  user_id?: number | null;
  payment_method: string;
  total_amount: number;
  order_items: {
    product_id: number;
    quantity: number;
    price: number;
  }[];
  order_address_id: number;
};

export type OrderWithAddress = {
  fullname: string;
  mobile_number: string;
  zip_code: string;
  street_address: string;
  city: string;
  state: string;
  id: number;
} & Order;
