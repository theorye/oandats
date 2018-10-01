import { InstrumentName, DateTime } from "../Primitives";
import { PriceValue } from "../Pricing";
import { OrderBookBucket } from ".";

// The represensation of an instrument's order book at a point in time
export interface OrderBook {
  //
  // The order book’s instrument
  //
  instrument: InstrumentName;

  //
  // The time when the order book snapshot was created.
  //
  time: DateTime;

  //
  // The price (midpoint) for the order book’s instrument at the time of the
  // order book snapshot
  //
  price: PriceValue;

  //
  // The price width for each bucket. Each bucket covers the price range from
  // the bucket’s price to the bucket’s price + bucketWidth.
  //
  bucketWidth: PriceValue;

  //
  // The partitioned order book, divided into buckets using a default bucket
  // width. These buckets are only provided for price ranges which actually
  // contain order or position data.
  //
  buckets: [OrderBookBucket];
}
