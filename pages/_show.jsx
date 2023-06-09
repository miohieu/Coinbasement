import { useEffect } from "react"
import showStore from "../store/Showstore"
import { useParams } from "react-router-dom"
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import Navbar from "../components/Navbar";


export default function Show() {
    const store = showStore()
    const param = useParams()


    useEffect(() => {
        store.fetchData(param.id)
        return ()=> {store.reset()}
    }, [])

    if (!store.data) return <> </>;

    return (
        
        <div>
            <Navbar back></Navbar>
        <div className="container width">

            <div>
                <img src={store.data.image.small} alt="" />
                <h1> {store.data.market_data.current_price.usd} </h1>
            </div>
            <div className="show-header">
                <h2>{store.data.name} ({store.data.symbol})</h2>
                <h2>Rank: {store.data.market_cap_rank}</h2>
            </div>

            <LineChart width={700} height={500} data={store.graphData}>
                <YAxis />
                <XAxis />
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>

        </div>
    )


}
