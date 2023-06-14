import Navbar from "../components/Navbar";
import "./App.css";
import ThemeButton from "../components/theme-button";
import Home from "../pages/Home.jsx"

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <ThemeButton />
        </>
    );
}

export default App;
