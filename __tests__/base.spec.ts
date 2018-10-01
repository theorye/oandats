import { sampleFunction } from "../src";
import { Oanda } from "../src";

const api = new Oanda();
const accountId = "101-001-1857093-002";
const transactionId = "16711";

describe("This is a simple test", () => {
  test(`${process.env.OANDA_KEY}`, () => {
    console.log("key", process.env.OANDA_KEY);

    expect(sampleFunction("hello")).toEqual("hellohello");
  });

  test.skip("it can get a list of accounts", async () => {
    const response = await api.getAccounts();
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get a specific account", async () => {
    const response = await api.getAccount(accountId);
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get an account summary", async () => {
    const response = await api.getAccountSummary(accountId);
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get all instrument details", async () => {
    const response = await api.getInstruments(accountId);
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get specific instrument's details", async () => {
    const response = await api.getInstruments(accountId, "EUR_USD,GBP_JPY");
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can change an account's configuration", async () => {
    const response = await api.configureAccount(accountId, { alias: "leggo" });
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can see changes since a transaction id", async () => {
    const response = await api.getAccountChanges(accountId, transactionId);
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get candles", async () => {
    const response = await api.getCandles("GBP_JPY");
    // console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get an order book for an instrument", async () => {
    const response = await api.getOrderBook("GBP_USD", "2018-09-25T20:00:00Z");
    console.log("here is response", response);
    expect(response).toBeDefined();
  });

  it.skip("can get a position book for an instrument", async () => {
    const response = await api.getOrderBook("GBP_USD", "2018-09-25T20:00:00Z");
    console.log("here is response", response);
    expect(response).toBeDefined();
  });

  it.skip("can get specific candles", async () => {
    const response = await api.getCandles("GBP_USD", {
      count: 5,
      granularity: "S30"
    });

    expect(response).toBeDefined();
  });

  it.skip("can create an order", async () => {
    const response = await api.createOrder(accountId, {
      units: "1000",
      instrument: "EUR_USD",
      timeInForce: "FOK",
      type: "MARKET",
      positionFill: "DEFAULT"
    });
    console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get orders", async () => {
    const response = await api.getOrders(accountId, {
      instrument: "GBP_JPY"
    });
    console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can get all pending orders", async () => {
    const response = await api.getPendingOrders(accountId);
    console.log(response);
    expect(response).toBeDefined();
  });

  it.skip("can stream transactions", async () => {
    await api.streamTransactions(accountId);
  });

  it("can stream prices", async () => {
    await api.streamPrice(accountId, { instruments: "GBP_JPY" });
  });
});
