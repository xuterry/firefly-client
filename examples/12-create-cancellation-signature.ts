/**
 * Creates order cancellation signature
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, MARKET_SYMBOLS, ORDER_SIDE } from "../index";

async function main() {
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  const client = new FireflyClient(Networks.TESTNET, dummyAccountKey);
  client.addMarket(MARKET_SYMBOLS.DOT);

  // post a limit order
  const response = await client.postOrder({
    symbol: MARKET_SYMBOLS.DOT,
    price: 15,
    quantity: 0.5,
    side: ORDER_SIDE.SELL,
  });

  // create signature
  const cancelSignature = await client.createOrderCancellationSignature({
    symbol: MARKET_SYMBOLS.DOT,
    hashes: [response.response.data.hash],
  });

  console.log("Cancellation Signature:", cancelSignature);
}

main().then().catch(console.warn);