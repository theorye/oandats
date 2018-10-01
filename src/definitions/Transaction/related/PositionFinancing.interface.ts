import { InstrumentName, AccountUnits } from "../../Primitives";
import { OpenTradeFinancing } from ".";

// OpenTradeFinancing is used to pay/collect daily financing charge for a Position within an Account
export interface PositionFinancing {
  //
  // The instrument of the Position that financing is being paid/collected
  // for.
  //
  instrument: InstrumentName;

  //
  // The amount of financing paid/collected for the Position.
  //
  financing: AccountUnits;

  //
  // The financing paid/collecte for each open Trade within the Position.
  //
  openTradeFinancings: [OpenTradeFinancing];
}
