// The reason that an Order was cancelled
export type OrderCancelReason =
  | "INTERNAL_SERVER_ERROR" // The Order was cancelled because at the time of filling, an unexpected internal server error occurred.
  | "ACCOUNT_LOCKED" // The Order was cancelled because at the time of filling the account was locked.
  | "ACCOUNT_NEW_POSITIONS_LOCKED" // The order was to be filled, however the account is configured to not allow new positions to be created.
  | "ACCOUNT_ORDER_CREATION_LOCKED" // Filling the Order wasn’t possible because it required the creation of a dependent Order and the Account is locked for Order creation.
  | "ACCOUNT_ORDER_FILL_LOCKED" // Filling the Order was not possible because the Account is locked for filling Orders.
  | "CLIENT_REQUEST" // The Order was cancelled explicitly at the request of the client.
  | "MIGRATION" // The Order cancelled because it is being migrated to another account.
  | "MARKET_HALTED" // Filling the Order wasn’t possible because the Order’s instrument was halted.
  | "LINKED_TRADE_CLOSED" // The Order is linked to an open Trade that was closed.
  | "TIME_IN_FORCE_EXPIRED" //	The time in force specified for this order has passed.
  | "INSUFFICIENT_MARGIN" // Filling the Order wasn’t possible because the Account had insufficient margin.
  | "FIFO_VIOLATION" // Filling the Order would have resulted in a a FIFO violation.
  | "BOUNDS_VIOLATION" // Filling the Order would have violated the Order’s price bound.
  | "CLIENT_REQUEST_REPLACED" // The Order was cancelled for replacement at the request of the client.
  | "INSUFFICIENT_LIQUIDITY" // Filling the Order wasn’t possible because enough liquidity available.
  | "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST" //	Filling the Order would have resulted in the creation of a Take Profit Order with a GTD time in the past.
  | "TAKE_PROFIT_ON_FILL_LOSS" // Filling the Order would result in the creation of a Take Profit Order that would have been filled immediately, closing the new Trade at a loss.
  | "LOSING_TAKE_PROFIT" // Filling the Order would result in the creation of a Take Profit Loss Order that would close the new Trade at a loss when filled.
  | "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST" // Filling the Order would have resulted in the creation of a Stop Loss Order with a GTD time in the past.
  | "STOP_LOSS_ON_FILL_LOSS" // Filling the Order would result in the creation of a Stop Loss Order that would have been filled immediately, closing the new Trade at a loss.
  | "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED" // Filling the Order would result in the creation of a Stop Loss Order whose price would be zero or negative due to the specified distance.
  | "STOP_LOSS_ON_FILL_REQUIRED" // Filling the Order would not result in the creation of Stop Loss Order, however the Account’s configuration requires that all Trades have a Stop Loss Order attached to them.
  | "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED" // Filling the Order would not result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration requires that all Trades have a guaranteed Stop Loss Order attached to them.
  | "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED" // Filling the Order would result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
  | "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET" // Filling the Order would result in the creation of a guaranteed Stop Loss Order with a distance smaller than the configured mininum distance.
  | "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED" // Filling the Order would result in the creation of a guaranteed Stop Loss Order with trigger price and number of units that that violates the account’s guaranteed Stop Loss Order level restriction.
  | "STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED" // Filling the Order would result in the creation of a guaranteed Stop Loss Order for a hedged Trade, however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
  | "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID" // Filling the Order would result in the creation of a Stop Loss Order whose TimeInForce value is invalid. A likely cause would be if the Account requires guaranteed stop loss orders and the TimeInForce value were not GTC.
  | "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID" // Filling the Order would result in the creation of a Stop Loss Order whose TriggerCondition value is invalid. A likely cause would be if the stop loss order is guaranteed and the TimeInForce is not TRIGGER_DEFAULT or TRIGGER_BID for a long trade, or not TRIGGER_DEFAULT or TRIGGER_ASK for a short trade.
  | "TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED" // Filling the Order would result in the creation of a Take Profit Order whose price would be zero or negative due to the specified distance.
  | "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST" // Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a GTD time in the past.
  | "CLIENT_TRADE_ID_ALREADY_EXISTS" // Filling the Order would result in the creation of a new Open Trade with a client Trade ID already in use.
  | "POSITION_CLOSEOUT_FAILED" // Closing out a position wasn’t fully possible.
  | "OPEN_TRADES_ALLOWED_EXCEEDED" // Filling the Order would cause the maximum open trades allowed for the Account to be exceeded.
  | "PENDING_ORDERS_ALLOWED_EXCEEDED" // Filling the Order would have resulted in exceeding the number of pending Orders allowed for the Account.
  | "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS" //	Filling the Order would have resulted in the creation of a Take Profit Order with a client Order ID that is already in use.
  | "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS" // Filling the Order would have resulted in the creation of a Stop Loss Order with a client Order ID that is already in use.
  | "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS" // Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a client Order ID that is already in use.
  | "POSITION_SIZE_EXCEEDED" // Filling the Order would have resulted in the Account’s maximum position size limit being exceeded for the Order’s instrument.
  | "HEDGING_GSLO_VIOLATION" // Filling the Order would result in the creation of a Trade, however there already exists an opposing (hedged) Trade that has a guaranteed Stop Loss Order attached to it. Guaranteed Stop Loss Orders cannot be combined with hedged positions.
  | "ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED"; // Filling the order would cause the maximum position value allowed for the account to be exceeded. The Order has been cancelled as a result.
