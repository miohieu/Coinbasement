import Navbar from "../components/Navbar";
import "./App.css";
import List from "../components/maincontent.jsx";
import CoinData from "../components/data";
import ThemeButton from "../components/theme-button";

function App() {
    const coinList = CoinData.map((content) => <List {...content} key={content.id} />)
    return (
        <>
            <Navbar />
            {coinList}

        <ThemeButton />
        </>
    );
}

export default App;
