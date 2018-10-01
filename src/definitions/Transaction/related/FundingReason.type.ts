// The reason that an Account is being funded.
export type FundingReason =
  | "CLIENT_FUNDING" // The client has initiated a funds transfer
  | "ACCOUNT_TRANSFER" // Funds are being transfered between two Accounts.
  | "DIVISION_MIGRATION" // Funds are being transfered as part of a Division migration
  | "SITE_MIGRATION" // Funds are being transfered as part of a Site migration
  | "ADJUSTMENT"; // Funds are being transfered as part of an Account adjustment
