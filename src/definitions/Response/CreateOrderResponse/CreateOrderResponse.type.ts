import { CreateOrderResponse201, CreateOrderResponse400 } from ".";
import { CreateOrderResponse404 } from "./CreateOrderResponse404.interface";

export type CreateOrderResponse =
  | CreateOrderResponse201
  | CreateOrderResponse400
  | CreateOrderResponse404;
