import { InstrumentName } from "../Primitives/InstrumentName.type";
import { CandlestickGranularity } from "../Instrument/CandlestickGranularity.type";
import { Candlestick } from "../Instrument/Candlestick.interface";

export interface CandlesResponse {
  //
  // The instrument whose Prices are represented by the candlesticks.
  //
  instrument: InstrumentName;

  //
  // The granularity of the candlesticks provided.
  //
  granularity: CandlestickGranularity;

  //
  // The list of candlesticks that satisfy the request.
  //
  candles: [Candlestick];
}
