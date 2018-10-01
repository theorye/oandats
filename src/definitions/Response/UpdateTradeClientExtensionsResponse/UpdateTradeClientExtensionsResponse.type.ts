import {
  UpdateTradeClientExtensionsResponse400,
  UpdateTradeClientExtensionsResponse200
} from ".";
import { UpdateTradeClientExtensionsResponse404 } from "./UpdateTradeClientExtensionsResponse404.interface";

export type UpdateTradeClientExtensionsResponse =
  | UpdateTradeClientExtensionsResponse400
  | UpdateTradeClientExtensionsResponse404
  | UpdateTradeClientExtensionsResponse200;
