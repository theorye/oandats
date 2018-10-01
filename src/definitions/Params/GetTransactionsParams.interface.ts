import { DateTime, Integer } from "../Primitives";

export interface GetTransactionsParams {
  from: DateTime; // The starting time (inclusive) of the time range for the Transactions being queried. [default=Account Creation Time]
  to: DateTime; // The ending time (inclusive) of the time range for the Transactions being queried. [default=Request Time]
  pageSize: Integer; // The number of Transactions to include in each page of the results. [default=100, maximum=1000]
  type: string; // List of TransactionFilter (csv)	A filter for restricting the types of Transactions to retreive.
}
