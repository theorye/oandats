import { ClientExtensions } from "../Transaction";

export interface UpdateTradeClientExtensionsParams {
  //
  // The Client Extensions to update the Trade with. Do not add, update, or
  // delete the Client Extensions if your account is associated with MT4.
  //
  clientExtensions: ClientExtensions;
}
