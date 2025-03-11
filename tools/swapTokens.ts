import type { Address } from "viem";
import { createViemWalletClient } from "../src/viem/createViemWalletClient.js";
import type { ToolConfig } from "./allTools.js";
import {swapTokens} from "../src/sparkdex/executeSwap";

import type { GetPriceToSwapArgs } from "../interface/index.js";

/**
 * Gets the connected wallet address.
 */
export const swapTokensTool: ToolConfig<GetPriceToSwapArgs> = {
  definition: {
    type: "function",
    function: {
      name: "swap_tokens",
      description: "Swap an amount of a token for another token",
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
    return await makeSwap(from,to,amount);
  },
};

/**
 * Gets the connected wallet address.
 */
async function makeSwap(from,to,amount): Promise<any> {
  const pair = await swapTokens(amount, from, to);
  return pair;
}
