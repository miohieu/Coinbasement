import { create } from "zustand";
import axios from "axios";

const showStore = create((set) => ({
  graphData: [],
  data: [],
  fetchData: async (id) => {
    const [dataRes, graphRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [time, p] = price;
      const date = new Date(time).toLocaleDateString("en-us");
      return {
        time: date,
        price: p,
      };
    });
    console.log(dataRes);
    set({ graphData });
    set({ data: dataRes.data });
  },
}));

export default showStore;
