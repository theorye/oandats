export interface CloseTradeParams {
  //
  // Indication of how much of the Trade to close. Either the string “ALL”
  // (indicating that all of the Trade should be closed), or a DecimalNumber
  // representing the number of units of the open Trade to Close using a
  // TradeClose MarketOrder. The units specified must always be positive, and
  // the magnitude of the value cannot exceed the magnitude of the Trade’s
  // open units.
  //
  units: string; // default=ALL)
}
