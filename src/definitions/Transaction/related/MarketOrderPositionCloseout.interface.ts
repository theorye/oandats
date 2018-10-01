import { InstrumentName } from "../../Primitives";

// A MarketOrderPositionCloseout specifies the extensions to a Market Order when it has been created to closeout a specific Position.
export interface MarketOrderPositionCloseout {
  //
  // The instrument of the Position being closed out.
  //
  instrument: InstrumentName;

  //
  // Indication of how much of the Position to close. Either “ALL”, or a
  // DecimalNumber reflection a partial close of the Trade. The DecimalNumber
  // must always be positive, and represent a number that doesn’t exceed the
  // absolute size of the Position.
  //
  units: string;
}
