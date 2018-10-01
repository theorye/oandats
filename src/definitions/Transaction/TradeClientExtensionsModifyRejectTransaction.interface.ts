import {
  Transaction,
  TransactionType,
  ClientID,
  ClientExtensions,
  TransactionRejectReason
} from ".";
import { TradeID } from "../Trade";

// A TradeClientExtensionsModifyRejectTransaction represents the rejection
// of the modification of a Trade’s Client Extensions.
export interface TradeClientExtensionsModifyRejectTransaction
  extends Transaction {
  //
  // The Type of the Transaction. Always set to
  // “TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT” for a
  // TradeClientExtensionsModifyRejectTransaction.
  //
  type: TransactionType; // default=TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT),

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

  //
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}
