import SunIcon from "../public/sun-svgrepo-com.svg";
import MoonIcon from "../public/moon-svgrepo-com.svg";
import { useState } from "react";

function ThemeButton() {
  const [dark, setTheme] = useState(true);
  let icon = dark ? SunIcon : MoonIcon;
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <div onClick={toggleTheme}>
      <img src={icon}  alt="" width={100}/> 
    </div>
  );
}
export default ThemeButton;
