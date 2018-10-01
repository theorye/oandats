// The reason that the Market Order was created to perform a margin closeout
export type MarketOrderMarginCloseoutReason =
  | "MARGIN_CHECK_VIOLATION" // Trade closures resulted from violating OANDA’s margin policy
  | "REGULATORY_MARGIN_CALL_VIOLATION"; // Trade closures came from a margin closeout event resulting from regulatory conditions placed on the Account’s margin call
