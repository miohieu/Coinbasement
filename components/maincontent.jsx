import { useState } from "react"
import liked from "../public/star-filled.png"
import unliked from "../public/star-empty.png"

export default function List(props) {

    const [favorite, setFavorite] = useState(props)

    function toggleFavorite() {
        setFavorite(prev => ({
            ...prev,
            isFavorite: !prev.isFavorite
        })

        )
    }
    let favoriteStatus = favorite.isFavorite ? liked : unliked;
    console.log(favoriteStatus)

    return (<section className="main-content">
        <div className="container-md">
            <div className="ranking">{props.ranking}</div>
            <div className="coinlist p-4">

                <ul className="flex">
                    <li>{props.name}
                    </li>
                    <img onClick={toggleFavorite} src={favoriteStatus} width={20}
                        className="ml-3"
                        display="inline-block"
                        alt="favorite-coins" />
                </ul>
                <div className="info w-30">{props.info}</div>

            </div>

        </div>

    </section>)

}
