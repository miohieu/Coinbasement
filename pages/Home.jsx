import { useEffect } from "react"
import HomeStore from "../store/homeStore";
import LinkItems from "../components/ListCoins";


export default function Home() {

    const store = HomeStore();
    useEffect(() => {
        store.fetchCoins()

    }, [])


    return (
        <div className="main_content">
            <div className="home-crypto container">
                <h1>{store.searchResult ? "Search result" : "Trending Coins"}</h1>
                {store.coins.map(coin => {
                    return (
                        <LinkItems key={coin.id} coin={coin} />
                    )
                }

                )}

            </div >
        </div>
    )

}
