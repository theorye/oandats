import { DecimalNumber } from "../../Primitives";

export interface AccountConfigurationResponse200 {
  //
  // Client-defined alias (name) for the Account
  //
  alias: string;

  //
  // The string representation of a decimal number.
  //
  marginRate: DecimalNumber;
}
