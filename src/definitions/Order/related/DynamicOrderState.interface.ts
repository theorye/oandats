import { OrderID } from ".";
import { PriceValue } from "../../Pricing";

// The dynamic state of an Order.  This is only relevant to TrailingStopLoss Orders,
// as no other Order type has dynamic state.
export interface DynamicOrderState {
  //
  // The Order’s ID.
  //
  id: OrderID;

  //
  // The Order’s calculated trailing stop value.
  //
  trailingStopValue: PriceValue;

  //
  // The distance between the Trailing Stop Loss Order’s trailingStopValue and
  // the current Market Price. This represents the distance (in price units)
  // of the Order from a triggering price. If the distance could not be
  // determined, this value will not be set.
  //
  triggerDistance: PriceValue;

  //
  // True if an exact trigger distance could be calculated. If false, it means
  // the provided trigger distance is a best estimate. If the distance could
  // not be determined, this value will not be set.
  //
  isTriggerDistanceExact: boolean;
}
