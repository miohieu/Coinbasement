import { useEffect } from "react"
import HomeStore from "../store/homeStore";
import { Link } from "react-router-dom";


export default function Home() {

    const store = HomeStore();
    useEffect(() => {
        store.fetchCoins()

    }, [])


    return (
        <div className="main_content">
            <div className="container">
                {store.coins.map(coin => {
                    return (

                        <div key={coin.id}>
                            <Link className="" to={`/${coin.id}`}>
                                <img src={coin.thumb} alt="" />{coin.name}
                            </Link>
                            <h4>{coin.price}/BTC</h4>
                            <h4>{coin.usdPrice}/USD</h4>

                        </div>
                    )
                }

                )}

            </div >
        </div>
    )

}
