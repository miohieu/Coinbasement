import { create } from "zustand";
import axios from "axios";
import debounce from "../helpers/debouce";

const HomeStore = create((set) => ({
    coins: [],
    query: "",
    trending: [],
    searchResult: false,

    setQuery: (e) => {
        set({ query: e.target.value });
        HomeStore.getState().findCoins();
    },

    findCoins: debounce(async () => {
        const { query, trending } = HomeStore.getState();
        if (query.length > 2) {
            const res = await axios.get(
                `https://api.coingecko.com/api/v3/search?query=${query}`
            );
            const coins = res.data.coins.map((coin) => {
                return {
                    id: coin.id,
                    thumb: coin.thumb,
                    name: coin.name,
                };
            });
            set({ coins, searchResult: true });
        } else {
            set({ coins: trending, searchResult: false});
        }
    }, 500),

    fetchCoins: async () => {
        const [res, btcRes] = await Promise.all([
            axios.get(
                "https://api.coingecko.com/api/v3/search/trending"
            ),
            axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
            )

        ])
        const btcPrice = btcRes.data.bitcoin.usd;
        const coins = res.data.coins.map((coin) => {
            return {
                id: coin.item.id,
                name: coin.item.name,
                symbol: coin.item.symbols,
                thumb: coin.item.thumb,
                price: coin.item.price_btc.toFixed(10),
                usdPrice: (coin.item.price_btc  * btcPrice).toFixed(10)
      };
        });
        set({ coins, trending: coins });
    },
}));

export default HomeStore;
