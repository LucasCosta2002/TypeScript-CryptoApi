import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

//estado global - similar a ContextApi

type CryptoStore = {
    cryptocurrencies : CryptoCurrency[];
    result: CryptoPrice;
    loading: boolean;
    fetchCryptos: () => Promise<void>;
    fetchData: (pair: Pair) => Promise<void>;
}

//set para escribir en el state
export const useCryptoStore = create<CryptoStore>()( devtools((set) => ({

    //inicializadores
    cryptocurrencies: [],
    result: {
        IMAGEURL: "", 
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: ""
    },
    loading: false,
    
    //acciones
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();
        // escribir las criptos en el state
        set( () => ({
            cryptocurrencies
        }));
    },
    
    //obtengo los datos del form
    fetchData: async (pair) => {
        set( () => ({
            loading: true
        }));

        const result = await fetchCurrentCryptoPrice(pair);    
        // escribir los valores en el state
        set( () => ({
            result,
            loading: false
        }));
    }
})))
