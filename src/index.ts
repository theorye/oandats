import { config } from "dotenv";

config();

export function sampleFunction(x: string): string {
  return x + x;
}

export * from "./oanda";
