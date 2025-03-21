import { getBalanceTool } from "./getBalance";
import { getWalletAddressTool } from "./getWalletAddress";
import { sendTransactionTool } from "./sendTransction";
import { deployErc20Tool } from "./deployERC20";
import { getPriceFromSparkDexTool } from "./getPriceFromSparkDex";
import { swapTokensTool } from "./swapTokens";

export interface ToolConfig<T = any> {
  /**
   * The definition of the tool.
   */
  definition: {
    type: "function";
    function: {
      name: string;
      description: string;
      parameters: {
        type: "object";
        properties: Record<string, unknown>;
        required: string[];
      };
    };
  };

  /**
   * The handler function that will be called when the tool is executed.
   */
  handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
  // == READ == \\
  /**
   * Get the balance of a wallet.
   */
  get_balance: getBalanceTool,
  /**
   * Get the connected wallet address.
   */
  get_wallet_address: getWalletAddressTool,
  /**
   * Get the price for a pair
   */
   get_amount_from_spark_dex: getPriceFromSparkDexTool,

  // == WRITE == \\
  /**
   * Send a transaction with optional parameters.
   */
  send_transaction: sendTransactionTool,
  /**
   * Deploy an ERC20 token.
   */
  deploy_erc20: deployErc20Tool,
  /**
   * Swap tokens
   */
   swap_tokens: swapTokensTool,
};
