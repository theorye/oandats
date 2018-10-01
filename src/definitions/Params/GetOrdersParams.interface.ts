import { OrderStateFilter, OrderID } from "../Order";
import { InstrumentName, Integer } from "../Primitives";

export interface GetOrdersParams {
  ids?: string; //	List of OrderID (csv)	List of Order IDs to retrieve
  state?: OrderStateFilter; // The state to filter the requested Orders by [default=PENDING]
  instrument?: InstrumentName; // The instrument to filter the requested orders by
  count?: Integer; // The maximum number of Orders to return [default=50, maximum=500]
  beforeID?: OrderID; //The maximum Order ID to return. If not provided the most recent Orders in the Account are returned
}
