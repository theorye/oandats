import { OrderBook } from "../Instrument/OrderBook.interface";

export interface OrderBookResponse {
  //
  // The instrument’s order book
  //
  orderBook: OrderBook;
}
