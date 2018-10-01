import { ClientExtensions } from "../Transaction";

export interface UpdateOrderClientExtensions {
  //
  // The Client Extensions to update for the Order. Do not set, modify, or
  // delete clientExtensions if your account is associated with MT4.
  //
  clientExtensions?: ClientExtensions;

  //
  // The Client Extensions to update for the Trade created when the Order is
  // filled. Do not set, modify, or delete clientExtensions if your account is
  // associated with MT4.
  //
  tradeClientExtensions?: ClientExtensions;
}
