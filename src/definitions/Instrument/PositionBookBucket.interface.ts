import { PriceValue } from "../Pricing";
import { DecimalNumber } from "../Primitives";

// The position book data for a partition of the instrument's prices.
export interface PositionBookBucket {
  //
  // The lowest price (inclusive) covered by the bucket. The bucket covers the
  // price range from the price to price + the position book’s bucketWidth.
  //
  price: PriceValue;

  //
  // The percentage of the total number of positions represented by the long
  // positions found in this bucket.
  //
  longCountPercent: DecimalNumber;

  //
  // The percentage of the total number of positions represented by the short
  // positions found in this bucket.
  //
  shortCountPercent: DecimalNumber;
}
