import { getContract, maxUint256, numberToHex, size , concat, formatEther } from 'viem';
import { createViemWalletClient } from "../viem/createViemWalletClient";
import { UNISWAP_V2_ROUTER_ABI, UNISWAP_V2_ROUTER_ADDRESS}  from "../constants/sparkdex";
import {tokensAvailable} from "../constants/tokens";

export async function swapTokens(amount:string, from_token:string, to_token:string) {
    const publicClient = createViemWalletClient();

    const path = [from_token,to_token];

    const tokenOrigin = tokensAvailable.find((t) => t.contractId === from_token);
    const tokenDestination = tokensAvailable.find((t) => t.contractId === to_token);

    const amountWithDecimals = Number(amount) * 10** tokenOrigin.decimals;

    const amountsOutContract = getContract({
        address: UNISWAP_V2_ROUTER_ADDRESS,
        abi: UNISWAP_V2_ROUTER_ABI,
        client: publicClient,
      });
    const [rateIn, rateOut] = await amountsOutContract.read.getAmountsOut([
        amountWithDecimals, path
    ]);
      const deadline = BigInt(Math.floor(Date.now() / 1000) + 600);
      const { request } = await publicClient.simulateContract({
          account: publicClient.account,
          address: UNISWAP_V2_ROUTER_ADDRESS,
          abi: UNISWAP_V2_ROUTER_ABI,
          functionName: 'swapExactETHForTokens',
          value: BigInt(amountWithDecimals),
          args: [BigInt(rateOut),path, publicClient.account.address, deadline ]
        });
    await publicClient.writeContract(request);
    return true;
}