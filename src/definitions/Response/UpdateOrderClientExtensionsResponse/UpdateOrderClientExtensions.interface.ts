import {
  UpdateOrderClientExtensionsResponse400,
  UpdateOrderClientExtensionsResponse200
} from ".";
import { UpdateOrderClientExtensionsResponse404 } from "./UpdateOrderClientExtensionsResponse404.interface";

export type UpdateOrderClientExtensions =
  | UpdateOrderClientExtensionsResponse400
  | UpdateOrderClientExtensionsResponse404
  | UpdateOrderClientExtensionsResponse200;
