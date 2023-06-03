import logo from "../public/logo.svg";
export default function Navbar() {



    return (
        <nav className="navbar xl:container bg-teal-900">
            <div className="container flex items-center">
                <div className="navbar-left flex items-center">
                    <img src={logo} alt="" />
                    <h1 className="navbar-title ">Coinbasement</h1>
                </div>
                <div className="navbar-right flex ml-3 items-center">
                    <ul className="navbar-links flex list-none">
                        <li>
                            <a href="">Market</a>
                        </li>
                        <li>
                            <a href="">Explore</a>
                        </li>
                        <li>
                            <a href="">Portfolio</a>
                        </li>
                    </ul>
                    <div className="button-login">Login</div>

                </div>
            </div>
        </nav>
    );
}
