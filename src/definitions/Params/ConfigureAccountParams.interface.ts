import { DecimalNumber } from "../Primitives/DecimalNumber.type";

export interface ConfigureAccountParams {
  //
  // Client-defined alias (name) for the Account
  //
  alias?: string;

  //
  // The string representation of a decimal number.
  //
  marginRate?: DecimalNumber;
}
