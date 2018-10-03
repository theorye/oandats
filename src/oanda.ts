import { Request } from "./request";
import {
  AccountsResponse,
  AccountID,
  AccountResponse,
  AccountSummaryResponse,
  InstrumentName,
  InstrumentsResponse,
  ConfigureAccountParams,
  AccountConfigurationResponse,
  AccountChangesResponse,
  GetCandlesParams,
  CandlesResponse,
  DateTime,
  OrderBookResponse,
  PositionBookResponse,
  OrderRequest,
  CreateOrderResponse,
  GetOrdersParams,
  GetOrdersResponse,
  GetPendingOrdersResponse,
  OrderSpecifier,
  GetOrderResponse,
  ReplaceOrderResponse,
  CancelOrderResponse,
  UpdateOrderClientExtensions,
  GetTradesParams,
  GetTradesResponse,
  GetOpenTradesResponse,
  TradeSpecifier,
  GetTradeResponse,
  CloseTradeParams,
  UpdateTradeClientExtensionsResponse,
  ModifyTradeDependentOrderParams,
  GetPositionsResponse,
  GetOpenPositionsResponse,
  GetInstrumentPositionResponse,
  ClosePositionResponse,
  GetTransactionsParams,
  GetTransactionsResponse,
  TransactionID,
  GetTransactionResponse,
  GetTransactionsRangeParams,
  GetTransactionSinceIdResponse,
  GetPricingResponse
} from "./definitions";
import { ModifyTradeDepedentOrderResponse } from "./definitions/Response/ModifyTradeDepedentOrdersResponse";
import { ClosePositionParams } from "./definitions/Params/ClosePositionParams.interface";
import { GetTransactionsRangeResponse } from "./definitions/Response/GetTransactionsRangeResponse.interface";
import { GetPricingParams } from "./definitions/Params/GetPricingParams.interface";
import { StreamPriceParams } from "./definitions/Params/StreamPriceParams.interface";

export interface Query {
  [key: string]: string | boolean | number | undefined;
}

export class Oanda {
  constructor(
    private key: string = process.env.OANDA_KEY || "",
    private isLive: boolean = false,
    private api: Request = new Request()
  ) {}

  //   https://stream-fxtrade.oanda.com/v3/accounts/<ACCOUNT>/pricing/stream?instruments=EUR_USD%2CUSD_CAD"
  //   https://api-fxtrade.oanda.com/labs/v1/calendar?instrument=EUR_USD&period=2592000"
  private path(
    endpoints: string[],
    query?: Query,
    isStream = false,
    isLab = false
  ): string {
    // url, queries, endpoints

    const endpoint = endpoints.join("/");
    const querystring = query
      ? "?" +
        Object.keys(query)
          .map(key => key + "=" + query[key])
          .join("&")
      : "";
    console.log(querystring);
    let path =
      `https://${isStream ? "stream" : "api"}-fx${
        this.isLive ? "trade" : `practice`
      }.oanda.com/${isLab ? "labs/v1" : "v3"}/${endpoint}` + querystring;
    return path;
  }

  // Account Endpoints
  getAccounts(): Promise<AccountsResponse> {
    return this.api.get(this.path(["accounts"]), this.key);
  }

  getAccount(accountId: AccountID): Promise<AccountResponse> {
    return this.api.get(this.path(["accounts", accountId]), this.key);
  }

  getAccountSummary(accountId: AccountID): Promise<AccountSummaryResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "summary"]),
      this.key
    );
  }

  getInstruments(
    accountId: AccountID,
    instruments?: InstrumentName
  ): Promise<InstrumentsResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "instruments"],
        instruments
          ? {
              instruments
            }
          : undefined
      ),
      this.key
    );
  }

  configureAccount(
    accountId: AccountID,
    params: ConfigureAccountParams
  ): Promise<AccountConfigurationResponse> {
    const { alias, marginRate } = params;
    return this.api.patch(
      this.path(["accounts", accountId, "configuration"]),
      this.key,
      {
        alias,
        marginRate
      }
    );
  }

  getAccountChanges(
    accountId: AccountID,
    sinceTransactionID?: string
  ): Promise<AccountChangesResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "changes"],
        sinceTransactionID
          ? {
              sinceTransactionID
            }
          : undefined
      ),
      this.key
    );
  }

  // Instrument Endpoints
  getCandles(
    instrument: string,
    params?: GetCandlesParams
  ): Promise<CandlesResponse> {
    return this.api.get(
      this.path(
        ["instruments", instrument, "candles"],
        params ? { ...params } : undefined
      ),
      this.key
    );
  }

  getOrderBook(
    instrument: string,
    time?: DateTime
  ): Promise<OrderBookResponse> {
    return this.api.get(
      this.path(
        ["instruments", instrument, "orderBook"],
        time
          ? {
              time
            }
          : undefined
      ),
      this.key
    );
  }

  getPositionBook(
    instrument: string,
    time?: DateTime
  ): Promise<PositionBookResponse> {
    return this.api.get(
      this.path(
        ["instruments", instrument, "positionBook"],
        time
          ? {
              time
            }
          : undefined
      ),
      this.key
    );
  }

  // Order Endpoints
  createOrder(
    accountId: AccountID,
    params: OrderRequest
  ): Promise<CreateOrderResponse> {
    return this.api.post(
      this.path(["accounts", accountId, "orders"]),
      this.key,
      {
        order: params
      }
    );
  }

  getOrders(
    accountId: AccountID,
    params?: GetOrdersParams
  ): Promise<GetOrdersResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "orders"],
        params ? { ...params } : undefined
      ),
      this.key
    );
  }

  getPendingOrders(accountId: AccountID): Promise<GetPendingOrdersResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "pendingOrders"]),
      this.key
    );
  }

  getOrder(
    accountId: AccountID,
    orderSpecifier: OrderSpecifier
  ): Promise<GetOrderResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "pendingOrders", orderSpecifier]),
      this.key
    );
  }

  replaceOrder(
    accountId: AccountID,
    orderSpecifier: OrderSpecifier,
    params: OrderRequest
  ): Promise<ReplaceOrderResponse> {
    return this.api.patch(
      this.path(["accounts", accountId, "orders", orderSpecifier]),
      this.key,
      {
        order: params
      }
    );
  }

  cancelOrder(
    accountId: AccountID,
    orderSpecifier: OrderSpecifier
  ): Promise<CancelOrderResponse> {
    return this.api.patch(
      this.path(["accounts", accountId, "orders", orderSpecifier, "cancel"]),
      this.key
    );
  }

  updateOrderClientExtensions(
    accountId: AccountID,
    orderSpecifier: OrderSpecifier,
    params: UpdateOrderClientExtensions
  ): Promise<UpdateOrderClientExtensions> {
    return this.api.patch(
      this.path([
        "accounts",
        accountId,
        "orders",
        orderSpecifier,
        "clientExtensions"
      ]),
      this.key,
      params
    );
  }

  // Trade
  getTrades(
    accountId: AccountID,
    params: GetTradesParams
  ): Promise<GetTradesResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "trades"],
        params ? { ...params } : undefined
      ),
      this.key
    );
  }

  getOpenTrades(accountId: AccountID): Promise<GetOpenTradesResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "openTrades"]),
      this.key
    );
  }

  getTrade(
    accountId: AccountID,
    tradeSpecifier: TradeSpecifier
  ): Promise<GetTradeResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "trades", tradeSpecifier]),
      this.key
    );
  }

  closeTrade(
    accountId: AccountID,
    tradeSpecifier: TradeSpecifier,
    params: CloseTradeParams
  ): Promise<GetTradeResponse> {
    return this.api.patch(
      this.path(["accounts", accountId, "trades", tradeSpecifier, "close"]),
      this.key,
      params
    );
  }

  updateTradeClientExtensions(
    accountId: AccountID,
    tradeSpecifier: TradeSpecifier,
    params: CloseTradeParams
  ): Promise<UpdateTradeClientExtensionsResponse> {
    return this.api.patch(
      this.path([
        "accounts",
        accountId,
        "trades",
        tradeSpecifier,
        "clientExtensions"
      ]),
      this.key,
      params
    );
  }

  modifyTradeDepedentOrders(
    accountId: AccountID,
    tradeSpecifier: TradeSpecifier,
    params: ModifyTradeDependentOrderParams
  ): Promise<ModifyTradeDepedentOrderResponse> {
    return this.api.patch(
      this.path(["accounts", accountId, "trades", tradeSpecifier, "orders"]),
      this.key,
      params
    );
  }

  // Position Endpoints
  getPositions(accountId: AccountID): Promise<GetPositionsResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "positions"]),
      this.key
    );
  }

  getOpenPositions(accountId: AccountID): Promise<GetOpenPositionsResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "openPositions"]),
      this.key
    );
  }

  getInstrumentPosition(
    accountId: AccountID,
    instrument: InstrumentName
  ): Promise<GetInstrumentPositionResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "positions", instrument]),
      this.key
    );
  }

  closePosition(
    accountId: AccountID,
    instrument: InstrumentName,
    params: ClosePositionParams
  ): Promise<ClosePositionResponse> {
    return this.api.patch(
      this.path(["accounts", accountId, "positions", instrument, "close"]),
      this.key,
      params
    );
  }

  // Transactions
  getTransactions(
    accountId: AccountID,
    params: GetTransactionsParams
  ): Promise<GetTransactionsResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "transactions"],
        params ? { ...params } : undefined
      ),
      this.key
    );
  }

  getTransaction(
    accountId: AccountID,
    transactionId: TransactionID
  ): Promise<GetTransactionResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "transactions", transactionId]),
      this.key
    );
  }

  getTransactionsRange(
    accountId: AccountID,
    params: GetTransactionsRangeParams
  ): Promise<GetTransactionsRangeResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "transactions", "idrange"],
        params ? { ...params } : undefined
      ),
      this.key
    );
  }

  getTransactionsSinceId(
    accountId: AccountID,
    id: TransactionID
  ): Promise<GetTransactionSinceIdResponse> {
    return this.api.get(
      this.path(["accounts", accountId, "transactions", "idrange"], { id }),
      this.key
    );
  }

  streamTransactions(accountId: AccountID) {
    return this.api.stream(
      this.path(["accounts", accountId, "transactions", "stream"], {}, true),
      this.key
    );
  }

  // Pricing Endpoints
  getPricing(
    accountId: AccountID,
    params: GetPricingParams
  ): Promise<GetPricingResponse> {
    return this.api.get(
      this.path(
        ["accounts", accountId, "pricing"],
        params ? { ...params } : undefined
      ),
      this.key
    );
  }

  streamPrice(accountId: AccountID, params: StreamPriceParams) {
    return this.api.stream(
      this.path(
        ["accounts", accountId, "pricing", "stream"],
        params ? { ...params } : undefined,
        true
      ),
      this.key
    );
  }

  // Forex-Labs

  getCalendar() {}

  getSpreads() {}

  getCOT() {}

  getSignals() {}
}
