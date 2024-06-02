import { z } from 'zod';

//schema a utilizar en los types
export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

//schema de la respuesta de la api
export const CryptoCurrencyResponseSchema = z.object({
    //z.object porque entramos a CoinInfo en el objeto que devuelve la api
    CoinInfo: z.object({
        FullName: z.string(),
        Name : z.string(),
    })
})

// convertir a array porque la api devuelve un array de objetpos
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

//schema de los valores del form
export const PairSchema = z.object({
    currency: z.string(), 
    criptocurrency: z.string()
})

//schema de los valores que retorna la api
export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(), 
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})
