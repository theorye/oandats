import { Price, HomeConversions } from "../Pricing";
import { DateTime } from "../Primitives";

export interface GetPricingResponse {
  //
  // The list of Price objects requested.
  //
  prices: [Price]; // required),

  //
  // The list of home currency conversion factors requested. This field will
  // only be present if includeHomeConversions was set to true in the request.
  //
  homeConversions: [HomeConversions];

  //
  // The DateTime value to use for the “since” parameter in the next poll
  // request.
  //
  time: DateTime;
}
