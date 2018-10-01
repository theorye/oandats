import { AccountUnits, DecimalNumber } from "../Primitives";
import { DynamicOrderState } from "../Order";
import { CalculatedTradeState } from "../Trade";
import { CalculatedPositionState } from "../Position";

// An AccountState Object is used to represent an Account’s current price-dependent state.
// Price-dependent Account state is dependent on OANDA’s current Prices, and includes things
// like unrealized PL, NAV and Trailing Stop Loss Order state.
export interface AccountChangesState {
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
  // The price-dependent state of each pending Order in the Account.
  //
  orders: [DynamicOrderState];

  //
  // The price-dependent state for each open Trade in the Account.
  //
  trades: [CalculatedTradeState];

  //
  // The price-dependent state for each open Position in the Account.
  //
  positions: [CalculatedPositionState];
}
