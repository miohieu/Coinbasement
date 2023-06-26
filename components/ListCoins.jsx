import { Link } from "react-router-dom"



const LinkItems = ({coin}) => {
    return (
        <div >
            <div className="image">
                <Link className="" to={`/${coin.id}`}>
                    <img src={coin.thumb} alt="" />{coin.name}
                </Link>
            </div>
            {coin.usdPrice && <h4>{coin.usdPrice}/USD</h4>}
        </div>
    )
}
export default LinkItems;
