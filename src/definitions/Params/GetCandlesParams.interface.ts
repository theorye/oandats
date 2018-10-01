import { PriceValue } from "../Pricing";
import { CandlestickGranularity, WeeklyAlignment } from "../Instrument";
import { Integer, DateTime } from "../Primitives";

export interface GetCandlesParams {
  price?: PriceValue;
  granularity?: CandlestickGranularity;
  count?: Integer;
  from?: DateTime;
  to?: DateTime;
  smooth?: boolean;
  includeFirstQuery?: boolean;
  dailyAlignment?: Integer;
  alignmentTimezone?: string;
  weeklyAlignment?: WeeklyAlignment;
}
