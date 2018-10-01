import { DateTime, Integer } from "../Primitives";
import { TransactionFilter, TransactionID } from "../Transaction";

export interface GetTransactionsResponse {
  //
  // The starting time provided in the request.
  //
  from: DateTime;

  //
  // The ending time provided in the request.
  //
  to: DateTime;

  //
  // The pageSize provided in the request
  //
  pageSize: Integer;

  //
  // The Transaction-type filter provided in the request
  //
  type: [TransactionFilter];

  //
  // The number of Transactions that are contained in the pages returned
  //
  count: Integer;

  //
  // The list of URLs that represent idrange queries providing the data for
  // each page in the query results
  //
  pages: [string];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}
