import { CloseTradeResponse200 } from "./CloseTradeResponse200.interface";
import { CloseTradeResponse400 } from "./CloseTradeResponse400.interface";
import { CloseTradeResponse404 } from "./CloseTradeResponse404.interface";

export type CloseTradeResponse =
  | CloseTradeResponse200
  | CloseTradeResponse400
  | CloseTradeResponse404;
