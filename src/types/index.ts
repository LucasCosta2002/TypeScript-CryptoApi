import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import { z } from "zod";

//inferimos datos del schema con zod
export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;