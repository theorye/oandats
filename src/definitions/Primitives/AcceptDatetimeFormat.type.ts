// DateTime header
export type AcceptDatetimeFormat =
  | "UNIX" // If “UNIX” is specified DateTime fields will be specified or returned in the “12345678.000000123” format.
  | "RFC3339"; // If “RFC3339” is specified DateTime will be specified or returned in “YYYY-MM-DDTHH:MM:SS.nnnnnnnnnZ” format.
