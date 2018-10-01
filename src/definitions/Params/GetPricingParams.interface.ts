import { DateTime } from "../Primitives";

export interface GetPricingParams {
  instruments: string; //	List of InstrumentName (csv)	List of Instruments to get pricing for. [required]
  since: DateTime; // Date/Time filter to apply to the response. Only prices and home conversions (if requested) with a time later than this filter (i.e. the price has changed after the since time) will be provided, and are filtered independently.
  includeUnitsAvailable: boolean; // Flag that enables the inclusion of the unitsAvailable field in the returned Price objects. [default=True] Deprecated: Will be removed in a future API update.
  includeHomeConversions: boolean; // Flag that enables the inclusion of the homeConversions field in the returned response. An entry will be returned for each currency in the set of all base and quote currencies present in the requested instruments list. [default=False]
}
