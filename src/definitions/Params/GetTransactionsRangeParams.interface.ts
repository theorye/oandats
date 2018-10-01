import { TransactionID } from "../Transaction";

export interface GetTransactionsRangeParams {
  from: TransactionID; // The starting Transacion ID (inclusive) to fetch. [required]
  to: TransactionID; // The ending Transaction ID (inclusive) to fetch. [required]
  type: string; // List of TransactionFilter (csv)	The filter that restricts the types of Transactions to retreive.
}
