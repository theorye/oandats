import { LiquidityRegenerationScheduleStep } from ".";

// A LiquidityRegenerationSchedule indicates how liquidity that is used when filling an Order for an instrument is regenerated following the fill.
// A liquidity regeneration schedule will be in effect until the timestamp of its final step, but may be replaced by a schedule created for an Order
// of the same instrument that is filled while it is still in effect.
export interface LiquidityRegenerationSchedule {
  //
  // The steps in the Liquidity Regeneration Schedule
  //
  steps: [LiquidityRegenerationScheduleStep];
}
