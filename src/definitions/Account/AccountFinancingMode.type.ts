// The financing mode of an Account
export type AccountFinancingMode =
  | "NO_FINANCING" // No financing is paid/charged for open Trades in the Account
  | "SECOND_BY_SECOND" //	Second-by-second financing is paid/charged for open Trades in the Account, both daily and when the the Trade is closed
  | "DAILY"; // A full day’s worth of financing is paid/charged for open Trades in the Account daily at 5pm New York time
