import Navbar from "../components/Navbar";
// import Hero from "../components/hero";
import "./App.css";
import List from "../components/maincontent.jsx";
import CoinData from "../components/data";

function App() {
    const coinList = CoinData.map((content) => <List {...content} key={content.id} />)
    return (
        <>
            <Navbar />
            <div> <ul>{coinList}</ul></div>
        </>
    );
}

export default App;
