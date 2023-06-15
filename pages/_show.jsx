import { useEffect } from "react"
import showStore from "../store/Showstore"
import { useParams } from "react-router-dom"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Show() {
    const store = showStore()
    const param = useParams()

    useEffect(() => {
        store.fetchData(param.id)
    }, [])
    return (
        <div>
            <header>
        <img src={store.data.image.small} alt=""/>
                <h1>{store.data.name} ({store.data.symbol})</h1>
            </header>

            <LineChart width={300} height={300} data={store.graphData}>
                <YAxis />
                <XAxis />
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
            </LineChart>

        </div>
    )

}
