import { AccountUnits, DecimalNumber } from "../Primitives";

// The Dynamically Calculated State of a client's Account
export interface CalculatedAccountState {
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
}
