const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = import.meta.env.VITE_API_KEY;

const getCoinsList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const searchCoin = (coin) =>
  `${BASE_URL}/search/?query=${coin}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = (coin, currency) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=${currency}&days=7&x_cg_demo_api_key=${API_KEY}`;

export { getCoinsList, searchCoin, marketChart };
