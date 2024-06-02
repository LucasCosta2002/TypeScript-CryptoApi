import { Currency } from "../types";

//utilizamos los types inferidos del schema
export const currencies : Currency[] = [
  { code: 'USD', name: 'Dolar de Estados Unidos'},
  { code: 'ARS', name: 'Peso Argentino'},
  { code: 'EUR', name: 'Euro'},
  { code: 'GBP', name: 'Libra Esterlina'},
]