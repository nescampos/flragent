import type { Address } from "viem";
import { createViemWalletClient } from "../src/viem/createViemWalletClient.js";
import type { ToolConfig } from "./allTools.js";
import {getPriceFromPair} from "../src/sparkdex/getPrices";

import type { GetPriceToSwapArgs } from "../interface/index.js";

/**
 * Gets the connected wallet address.
 */
export const getPriceFromSparkDexTool: ToolConfig<GetPriceToSwapArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_amount_from_spark_dex",
      description: "Get the amount to receive swapping a specific token/coint for another",
      // No parameters needed since we're getting the connected wallet
      parameters: {
        type: "object",
        properties: {
          from: {
            type: "string",
            description: "The contract Id of the token/coin to make a swap",
          },
          to: {
            type: "string",
            description: "The contract Id of the token/coin to get after the swap",
          },
          amount: {
            type: "number",
            description: "The amount to make a swap",
          },
        },
        required: ["from", "to","amount"],
      },
    },
  },
  handler: async ({from, to, amount}) => {
    return await getPrice(from,to,amount);
  },
};

/**
 * Gets the connected wallet address.
 */
async function getPrice(from,to,amount): Promise<any> {
  const pair = await getPriceFromPair(amount, from, to);
  return pair.amount;
}
