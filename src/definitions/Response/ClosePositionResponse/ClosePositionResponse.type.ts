import { ClosePositionResponse200 } from "./ClosePositionSResponse200.interface";
import { ClosePositionResponse400 } from "./ClosePositionResponse400.interface";
import { ClosePositionResponse404 } from "./ClosePositionResponse404.interface";

export type ClosePositionResponse =
  | ClosePositionResponse200
  | ClosePositionResponse400
  | ClosePositionResponse404;
