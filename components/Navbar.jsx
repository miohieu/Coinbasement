import HomeStore from "../store/homeStore";
import { Link } from "react-router-dom";



export default function Navbar(back) {

    const store = HomeStore();
    return (
        <nav className="navbar width">
            <div className="container flex items-center">
                <div className="navbar-left flex items-center">
                    { back && (
                        <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 48 48 48" width="48">
                            <path fill="currentColor" d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" /></svg>
                    </Link>) 
                    }
                    <h1 className="navbar-title "> <Link to="/">Coinbasement</Link> </h1>

                </div>
                <div className="navbar-right flex ml-3 items-center">
                    <ul className="navbar-links flex list-none">
                        <li>
                            <a href="">Explore</a>
                        </li>
                        <li>
                            <a href="">Portfolio</a>
                        </li>
                    </ul>
                    <div className="button-login">Login</div>
                    <input type="text" value={store.query} onChange={store.setQuery} />
                </div>
            </div>
        </nav >
    );
}
