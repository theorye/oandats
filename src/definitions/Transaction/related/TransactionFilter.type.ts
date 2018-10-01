// A filter that can be used when fetching Transactions
export type TransactionFilter =
  | "ORDER" // Order-related Transactions. These are the Transactions that create, cancel, fill or trigger Orders
  | "FUNDING" // Funding-related Transactions
  | "ADMIN" // Administrative Transactions
  | "CREATE" // Account Create Transaction
  | "CLOSE" // Account Close Transaction
  | "REOPEN" // Account Reopen Transaction
  | "CLIENT_CONFIGURE" // Client Configuration Transaction
  | "CLIENT_CONFIGURE_REJECT" // Client Configuration Reject Transaction
  | "TRANSFER_FUNDS" // Transfer Funds Transaction
  | "TRANSFER_FUNDS_REJECT" // Transfer Funds Reject Transaction
  | "MARKET_ORDER" // Market Order Transaction
  | "MARKET_ORDER_REJECT" // Market Order Reject Transaction
  | "LIMIT_ORDER" // Limit Order Transaction
  | "LIMIT_ORDER_REJECT" // Limit Order Reject Transaction
  | "STOP_ORDER" // Stop Order Transaction
  | "STOP_ORDER_REJECT" // Stop Order Reject Transaction
  | "MARKET_IF_TOUCHED_ORDER" // Market if Touched Order Transaction
  | "MARKET_IF_TOUCHED_ORDER_REJECT" // Market if Touched Order Reject Transaction
  | "TAKE_PROFIT_ORDER" // Take Profit Order Transaction
  | "TAKE_PROFIT_ORDER_REJECT" // Take Profit Order Reject Transaction
  | "STOP_LOSS_ORDER" // Stop Loss Order Transaction
  | "STOP_LOSS_ORDER_REJECT" // Stop Loss Order Reject Transaction
  | "TRAILING_STOP_LOSS_ORDER" // Trailing Stop Loss Order Transaction
  | "TRAILING_STOP_LOSS_ORDER_REJECT" // Trailing Stop Loss Order Reject Transaction
  | "ONE_CANCELS_ALL_ORDER" // One Cancels All Order Transaction
  | "ONE_CANCELS_ALL_ORDER_REJECT" // One Cancels All Order Reject Transaction
  | "ONE_CANCELS_ALL_ORDER_TRIGGERED" // One Cancels All Order Trigger Transaction
  | "ORDER_FILL" // Order Fill Transaction
  | "ORDER_CANCEL" // Order Cancel Transaction
  | "ORDER_CANCEL_REJECT" // Order Cancel Reject Transaction
  | "ORDER_CLIENT_EXTENSIONS_MODIFY" // Order Client Extensions Modify Transaction
  | "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT" // Order Client Extensions Modify Reject Transaction
  | "TRADE_CLIENT_EXTENSIONS_MODIFY" // Trade Client Extensions Modify Transaction
  | "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT" // Trade Client Extensions Modify Reject Transaction
  | "MARGIN_CALL_ENTER" // Margin Call Enter Transaction
  | "MARGIN_CALL_EXTEND" // Margin Call Extend Transaction
  | "MARGIN_CALL_EXIT" // Margin Call Exit Transaction
  | "DELAYED_TRADE_CLOSURE" // Delayed Trade Closure Transaction
  | "DAILY_FINANCING" // Daily Financing Transaction
  | "RESET_RESETTABLE_PL"; // Reset Resettable PL Transaction
