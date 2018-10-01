import { AccountID, GuaranteedStopLossOrderMode } from ".";
import {
  Currency,
  AccountUnits,
  Integer,
  DateTime,
  DecimalNumber
} from "../Primitives";
import { TransactionID } from "../Transaction";
import { TradeSummary } from "../Trade";
import { Order } from "../Order";

// The full details of a client’s Account. This includes full open Trade, open Position and pending Order representation.
export interface Account {
  //
  // The Account’s identifier
  //
  id: AccountID;

  // #
  // # Client-assigned alias for the Account. Only provided if the Account has
  // # an alias set
  // #
  alias: string;

  //
  // The home currency of the Account
  //
  currency: Currency;

  //
  // The current balance of the Account.
  //
  balance: AccountUnits;

  //
  // ID of the user that created the Account.
  //
  createdByUserID: Integer;

  //
  // The date/time when the Account was created.
  //
  createdTime: DateTime;

  //
  // The current guaranteed Stop Loss Order mode of the Account.
  //
  guaranteedStopLossOrderMode: GuaranteedStopLossOrderMode;

  //
  // The total profit/loss realized over the lifetime of the Account.
  //
  pl: AccountUnits;

  //
  // The total realized profit/loss for the Account since it was last reset by
  // the client.
  //
  resettablePL: AccountUnits;

  //
  // The date/time that the Account’s resettablePL was last reset.
  //
  resettablePLTime: DateTime;

  //
  // The total amount of financing paid/collected over the lifetime of the
  // Account.
  //
  financing: AccountUnits;

  //
  // The total amount of commission paid over the lifetime of the Account.
  //
  commission: AccountUnits;

  //
  // The total amount of fees charged over the lifetime of the Account for the
  // execution of guaranteed Stop Loss Orders.
  //
  guaranteedExecutionFees: AccountUnits;

  //
  // Client-provided margin rate override for the Account. The effective
  // margin rate of the Account is the lesser of this value and the OANDA
  // margin rate for the Account’s division. This value is only provided if a
  // margin rate override exists for the Account.
  //
  marginRate: DecimalNumber;

  //
  // The date/time when the Account entered a margin call state. Only provided
  // if the Account is in a margin call.
  //
  marginCallEnterTime: DateTime;

  //
  // The number of times that the Account’s current margin call was extended.
  //
  marginCallExtensionCount: Integer;

  //
  // The date/time of the Account’s last margin call extension.
  //
  lastMarginCallExtensionTime: DateTime;

  //
  // The number of Trades currently open in the Account.
  //
  openTradeCount: Integer;

  //
  // The number of Positions currently open in the Account.
  //
  openPositionCount: Integer;

  //
  // The number of Orders currently pending in the Account.
  //
  pendingOrderCount: Integer;

  //
  // Flag indicating that the Account has hedging enabled.
  //
  hedgingEnabled: boolean;

  //
  // The total unrealized profit/loss for all Trades currently open in the
  // Account.
  //
  unrealizedPL: AccountUnits;

  //
  // The net asset value of the Account. Equal to Account balance +
  // unrealizedPL.
  //
  NAV: AccountUnits;

  //
  // Margin currently used for the Account.
  //
  marginUsed: AccountUnits;

  //
  // Margin available for Account currency.
  //
  marginAvailable: AccountUnits;

  //
  // The value of the Account’s open positions represented in the Account’s
  // home currency.
  //
  positionValue: AccountUnits;

  //
  // The Account’s margin closeout unrealized PL.
  //
  marginCloseoutUnrealizedPL: AccountUnits;

  //
  // The Account’s margin closeout NAV.
  //
  marginCloseoutNAV: AccountUnits;

  //
  // The Account’s margin closeout margin used.
  //
  marginCloseoutMarginUsed: AccountUnits;

  //
  // The Account’s margin closeout percentage. When this value is 1.0 or above
  // the Account is in a margin closeout situation.
  //
  marginCloseoutPercent: DecimalNumber;

  //
  // The value of the Account’s open positions as used for margin closeout
  // calculations represented in the Account’s home currency.
  //
  marginCloseoutPositionValue: DecimalNumber;

  //
  // The current WithdrawalLimit for the account which will be zero or a
  // positive value indicating how much can be withdrawn from the account.
  //
  withdrawalLimit: AccountUnits;

  //
  // The Account’s margin call margin used.
  //
  marginCallMarginUsed: AccountUnits;

  //
  // The Account’s margin call percentage. When this value is 1.0 or above the
  // Account is in a margin call situation.
  //
  marginCallPercent: DecimalNumber;

  //
  // The ID of the last Transaction created for the Account.
  //
  lastTransactionID: TransactionID;

  //
  // The details of the Trades currently open in the Account.
  //
  trades: [TradeSummary];

  //
  // The details all Account Positions.
  //
  positions: [Position];

  //
  // The details of the Orders currently pending in the Account.
  //
  orders: [Order];
}
