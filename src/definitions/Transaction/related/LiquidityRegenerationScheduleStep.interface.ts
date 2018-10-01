import { DateTime, DecimalNumber } from "../../Primitives";

// A liquidity regeneration schedule Step indicates the amount of bid and ask liquidity that is used by the Account at a certain time.
// These amounts will only change at the timestamp of the following step.
export interface LiquidityRegenerationScheduleStep {
  //
  // The timestamp of the schedule step.
  //
  timestamp: DateTime;

  //
  // The amount of bid liquidity used at this step in the schedule.
  //
  bidLiquidityUsed: DecimalNumber;

  //
  // The amount of ask liquidity used at this step in the schedule.
  //
  askLiquidityUsed: DecimalNumber;
}
