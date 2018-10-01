import { TradeStateFilter, TradeID } from "../Trade";
import { InstrumentName, Integer } from "../Primitives";

export interface GetTradesParams {
  ids?: string; //	List of TradeID (csv)	List of Trade IDs to retrieve.
  state?: TradeStateFilter; // The state to filter the requested Trades by. [default=OPEN]
  instrument?: InstrumentName; // The instrument to filter the requested Trades by.
  count?: Integer; // The maximum number of Trades to return. [default=50, maximum=500]
  beforeID?: TradeID; // The maximum Trade ID to return. If not provided the most recent Trades in the Account are returned.
}
