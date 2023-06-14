import { useEffect } from "react"
import HomeStore from "../store/homeStore";
import { Link } from "react-router-dom";


export default function Home() {

    const store = HomeStore();
    useEffect(() => {
        store.fetchCoins()

    }, [])


    return (
        <div>
            {store.coins.map(coin => {
                return (

                    <div key={coin.id}>
                        <Link to={`/${coin.id}`}>
                            {coin.name}
                        </Link>
                    </div>
                )
            }

            )}

        </div >)

}
