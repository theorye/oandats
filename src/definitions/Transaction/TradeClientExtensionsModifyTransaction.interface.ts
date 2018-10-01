import { Transaction, TransactionType, ClientID, ClientExtensions } from ".";
import { TradeID } from "../Trade";

// A TradeClientExtensionsModifyTransaction represents the modification of a Trade’s Client Extensions.
export interface TradeClientExtensionsModifyTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to
  // “TRADE_CLIENT_EXTENSIONS_MODIFY” for a
  // TradeClientExtensionsModifyTransaction.
  //
  type: TransactionType; // default=TRADE_CLIENT_EXTENSIONS_MODIFY),

  //
  // The ID of the Trade who’s client extensions are to be modified.
  //
  tradeID: TradeID;

  //
  // The original Client ID of the Trade who’s client extensions are to be
  // modified.
  //
  clientTradeID: ClientID;

  //
  // The new Client Extensions for the Trade.
  //
  tradeClientExtensionsModify: ClientExtensions;
}
