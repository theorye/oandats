import { PriceValue } from ".";
import { Integer } from "../Primitives";

// A Price Bucket represents a price available for an amount of liquidity
export interface PriceBucket {
  //
  // The Price offered by the PriceBucket
  //
  price: PriceValue;

  //
  // The amount of liquidity offered by the PriceBucket
  //
  liquidity: Integer;
}
