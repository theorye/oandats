import { PriceValue } from "../Pricing";
import { DecimalNumber } from "../Primitives";

// The order book data for a partition of the instrument's prices.
export interface OrderBookBucket {
  //
  // The lowest price (inclusive) covered by the bucket. The bucket covers the
  // price range from the price to price + the order book’s bucketWidth.
  //
  price: PriceValue;

  //
  // The percentage of the total number of orders represented by the long
  // orders found in this bucket.
  //
  longCountPercent: DecimalNumber;

  //
  // The percentage of the total number of orders represented by the short
  // orders found in this bucket.
  //
  shortCountPercent: DecimalNumber;
}
