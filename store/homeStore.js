import { create } from "zustand";
import axios from "axios";
import debounce from "../helpers/debouce";

const HomeStore = create((set) => ({
  coins: [],
  query: "",
  trending: [],

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
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });
      set({ coins });
    } else {
      set({ coins: trending });
    }
  }, 700),

  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const coins = res.data.coins.map((coin) => {
      return {
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbols,
        image: coin.item.large,
        price: coin.item.price_btc,
      };
    });
    set({ coins, trending: coins });
  },
}));

export default HomeStore;
