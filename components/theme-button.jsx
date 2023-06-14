import SunIcon from "/sun-svgrepo-com.svg";
import MoonIcon from "/moon-svgrepo-com.svg";
import { useState } from "react";

function ThemeButton() {
    const [dark, setTheme] = useState(true);
    let icon = dark ? SunIcon : MoonIcon;
    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    };
    return (
        <div className="flex items-center justify-center">
            <img onClick={toggleTheme} src={icon} alt="" width={50} />
        </div>
    );
}
export default ThemeButton;
