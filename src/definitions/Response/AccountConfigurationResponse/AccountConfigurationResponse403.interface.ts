import {
  ClientConfigureRejectTransaction,
  TransactionID
} from "../../Transaction";

export interface AccountConfigurationResponse403 {
  //
  // The transaction that rejects the configuration of the Account.
  //
  clientConfigureRejectTransaction: ClientConfigureRejectTransaction;

  //
  // The ID of the last Transaction created for the Account.
  //
  lastTransactionID: TransactionID;

  //
  // The code of the error that has occurred. This field may not be returned
  // for some errors.
  //
  errorCode: string;

  //
  // The human-readable description of the error that has occurred.
  //
  errorMessage: string; // required)
}
