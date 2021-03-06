// The reason that an Order was filled
export type OrderFillReason =
  | "LIMIT_ORDER" // The Order filled was a Limit Order
  | "STOP_ORDER" // The Order filled was a Stop Order
  | "MARKET_IF_TOUCHED_ORDER" // The Order filled was a Market-if-touched Order
  | "TAKE_PROFIT_ORDER" // The Order filled was a Take Profit Order
  | "STOP_LOSS_ORDER" // The Order filled was a Stop Loss Order
  | "TRAILING_STOP_LOSS_ORDER" // The Order filled was a Trailing Stop Loss Order
  | "MARKET_ORDER" // The Order filled was a Market Order
  | "MARKET_ORDER_TRADE_CLOSE" // The Order filled was a Market Order used to explicitly close a Trade
  | "MARKET_ORDER_POSITION_CLOSEOUT" // The Order filled was a Market Order used to explicitly close a Position
  | "MARKET_ORDER_MARGIN_CLOSEOUT" // The Order filled was a Market Order used for a Margin Closeout
  | "MARKET_ORDER_DELAYED_TRADE_CLOSE"; // The Order filled was a Market Order used for a delayed Trade close
