import { WFLR_ABI} from "./abi/wflr";
import { USDX_ABI} from "./abi/usdx";
import { USDT_ABI} from "./abi/usdt";
import { USDC_ABI} from "./abi/usdc";


interface Token {
    name: string;        // Nombre del token
    symbol: string;      // Símbolo del token
    decimals: number;    // Decimales del token
    contractId: string;  // ID del contrato
}

export const tokensAvailable: Token[] = [
    {
        name: "Flare",
        symbol: "FLR",
        decimals: 18,
        contractId: "0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d",
    },
    {
        name: "Wrapped Flare",
        symbol: "WFLR",
        decimals: 18,
        contractId: "0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d",
    },
    {
        name: "Hex Trust USD",
        symbol: "USDX",
        decimals: 6,
        contractId: "0x4A771Cc1a39FDd8AA08B8EA51F7Fd412e73B3d2B",
    },
    {
        name: "Stargate Bridged USDT",
        symbol: "USDT",
        decimals: 6,
        contractId: "0x0B38e83B86d491735fEaa0a791F65c2B99535396",
    },
    {
        name: "Bridged Usdc (Stargate)",
        symbol: "USDC",
        decimals: 6,
        contractId: "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6",
    },
  ];

export const abiByToken = [
    {
        contractId: "0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d",
        ABI: WFLR_ABI
    },
    {
        contractId: "0x4A771Cc1a39FDd8AA08B8EA51F7Fd412e73B3d2B",
        ABI: USDX_ABI
    },
    {
        contractId: "0x0B38e83B86d491735fEaa0a791F65c2B99535396",
        ABI: USDT_ABI
    },
    {
        contractId: "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6",
        ABI: USDC_ABI
    },
]

export const concatenatedTokens = tokensAvailable
        .map(
        (token) =>
            `Name: ${token.name}, Symbol: ${token.symbol}, Decimals: ${token.decimals}, Contract ID: ${token.contractId}`
        )
        .join("\n");