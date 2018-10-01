interface OandaEndpoints {
  getAccounts: () => string;

  // getAccount() {

  // }

  // getAccountSummary() {

  // }

  // getInstruments() {

  // }

  // updateAccount() {

  // }

  // getAccountChanges() {

  // }

  // // Instrument Endpoints
  // getCandles() {

  // }

  // getOrderBook() {

  // }

  // getPositionBook() {

  // }

  // // Order Endpoints
  // createOrder() {

  // }

  // getOrders() {

  // }

  // getPendingOrders() {

  // }

  // getOrder() {

  // }

  // replaceOrder() {

  // }

  // cancelOrder() {

  // }

  // updateOrderClientExtensions() {

  // }

  // // Trade
  // getTrades() {

  // }

  // getOpenTrades() {

  // }

  // getTrade() {

  // }

  // closeTrade() {

  // }

  // updateTradeClientExtensions() {

  // }

  // modifyTradeDepedentOrders() {

  // }

  // // Position Endpoints
  // getPositions() {

  // }

  // getOpenPositions() {

  // }

  // getInstrumentPosition() {

  // }

  // closePosition() {

  // }

  // // Transactions
  // getTransactions() {

  // }

  // getTransaction() {

  // }

  // getTransactionsRange() {

  // }

  // getTransactionsSinceId() {

  // }

  // streamTransactions() {

  // }

  // // Pricing Endpoints
  // getPricing() {

  // }

  // streamPrice() {

  // }

  // // Forex-Labs

  // getCalendar() {

  // }

  // getSpreads() {

  // }

  // getCOT() {

  // }

  // getSignals() {

  // }
}

/* Response Definitions
*/

// export interface AccountChangesResponse {
//     // The changes to the Account’s Orders, Trades and Positions since the
//     // specified Transaction ID. Only provided if the sinceTransactionID is
//     // supplied to the poll request.
//     changes: AccountChanges;

//     // The Account’s current price-dependent state.
//     state: AccountChangesState;

//     // The ID of the last Transaction created for the Account.  This Transaction
//     // ID should be used for future poll requests, as the client has already
//     // observed all changes up to and including it.
//     lastTransactionID: string;
// }

// export interface IBodyArgs {
//     alias?: string;
//     marginRate?: string;
//   }

//   export interface GetCandlesQuery {
//     instrument: string;
//     price?: string;
//     granularity?: string;
//     count?: number;
//     from?: string;
//     to?: string;
//     smooth?: boolean;
//     includeFirst?: boolean;
//     dailyAlignment?: number;
//     weeklyAlignment?: string;
//   }

//   export interface InstrumentsQuery {
//     instruments?: string;
//   }

//   export interface AccountChangesQuery {
//     sinceTransactionID?: string;
//   }

//   export type QueryParams =
//     | InstrumentsQuery
//     | AccountChangesQuery
//     | GetCandlesQuery;

//   export interface IRequestOptionsArgs {
//     endpoint: string;
//     method: string;
//     accountId?: string;
//     query?: QueryParams;
//     body?: IBodyArgs;
//   }
