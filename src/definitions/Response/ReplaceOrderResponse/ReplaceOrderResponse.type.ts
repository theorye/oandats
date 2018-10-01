import { ReplaceOrderResponse200 } from "./ReplaceOrderResponse200.interface";
import { ReplaceOrderResponse400 } from "./ReplaceOrderResponse400.interface";
import { ReplaceOrderResponse404 } from "./ReplaceOrderResponse404.interface";

export type ReplaceOrderResponse =
  | ReplaceOrderResponse200
  | ReplaceOrderResponse400
  | ReplaceOrderResponse404;
