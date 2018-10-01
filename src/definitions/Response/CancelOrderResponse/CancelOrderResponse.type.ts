import { CancelOrderResponse200 } from "./CancelOrderResponse200.interface";
import { CancelOrderResponse404 } from "./CancelOrderResponse404.interface";

export type CancelOrderResponse =
  | CancelOrderResponse200
  | CancelOrderResponse404;
