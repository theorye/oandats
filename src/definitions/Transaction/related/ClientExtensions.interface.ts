import { ClientID, ClientTag, ClientComment } from ".";

// A ClientExtensions object allows a client to attach a clientID, tag and comment to Orders and Trades in their Account.
// Do not set, modify, or delete this field if your account is associated with MT4.
export interface ClientExtensions {
  // #
  // # The Client ID of the Order/Trade
  // #
  id: ClientID;

  // A tag associated with the Order/Trade
  // #
  tag: ClientTag;

  // #
  // # A comment associated with the Order/Trade
  // #
  comment: ClientComment;
}
