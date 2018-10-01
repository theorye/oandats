import {
  AccountConfigurationResponse200,
  AccountConfigurationResponse403
} from ".";
import { AccountConfigurationResponse400 } from "./AccountConfigurationResponse400.interface";

export type AccountConfigurationResponse =
  | AccountConfigurationResponse200
  | AccountConfigurationResponse400
  | AccountConfigurationResponse403;
