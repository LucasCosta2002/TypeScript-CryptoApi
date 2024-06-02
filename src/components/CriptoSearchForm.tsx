import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {

    //state con zustand
    const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies)
    const fetchData = useCryptoStore(state => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        //valores de los name de los inputs
        currency: '', 
        criptocurrency: ''
    })
    const [error, setError] = useState("")

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        //copia del state anterior y del atributo name consigo su value
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')){
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")
        //consultar api
        fetchData(pair)
    }

    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>   
            </div>
           
            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda</label>
                <select 
                    name="criptocurrency" 
                    id="criptocurrency"
                    onChange={handleChange}    
                    value={pair.criptocurrency}
                >
                    <option value="">-- Seleccione --</option>
                    {cryptocurrencies.map(criptocurrency => (
                        <option 
                            key={criptocurrency.CoinInfo.Name} 
                            value={criptocurrency.CoinInfo.Name}
                        >
                            {criptocurrency.CoinInfo.FullName}
                        </option>
                    ))}
                </select>   
            </div>

            <input type="submit" value="Cotizar"/>
        </form>
    )
}
