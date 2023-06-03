import { useState } from "react"
export default function List(props) {

    const [favorite, setFavorite] = useState(false)

    function toggleFavorite() {
        setFavorite(prev => !prev)
    }
    let favoriteStatus = favorite ? "liked" : "click to add to favorite";
    console.log(favoriteStatus)

    return (<section className="main-content">
        <div className="container">
            <div className="coinlist">
                <ul>
                    <li onClick={toggleFavorite}>{props.name} {favoriteStatus}</li>
                </ul>
            </div>

        </div>
    </section>)

}
