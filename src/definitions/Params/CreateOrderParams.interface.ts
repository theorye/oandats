import { OrderRequest } from "../Order/requests/OrderRequest.interface";

export interface CreateOrderParams {
  //
  // Specification of the Order to create
  //
  order: OrderRequest;
}
