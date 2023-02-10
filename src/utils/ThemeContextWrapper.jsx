import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeSelector";

function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState("light-theme");

  function changeTheme(theme) {
    setTheme(theme);
  }
  //cek
  useEffect(() => {
    document.body.className = `${theme}`;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextWrapper;
