import { InstrumentName, DateTime } from "../Primitives";
import { PriceValue } from "../Pricing";
import { PositionBookBucket } from ".";

// The represenation of an instrument's position book at a point in time
export interface PositionBook {
  //
  // The position book’s instrument
  //
  instrument: InstrumentName;

  //
  // The time when the position book snapshot was created
  //
  time: DateTime;

  //
  // The price (midpoint) for the position book’s instrument at the time of
  // the position book snapshot
  //
  price: PriceValue;

  //
  // The price width for each bucket. Each bucket covers the price range from
  // the bucket’s price to the bucket’s price + bucketWidth.
  //
  bucketWidth: PriceValue;

  //
  // The partitioned position book, divided into buckets using a default
  // bucket width. These buckets are only provided for price ranges which
  // actually contain order or position data.
  //
  buckets: [PositionBookBucket];
}
