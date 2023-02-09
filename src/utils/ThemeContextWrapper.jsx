import React, { useEffect, useState } from "react";
import { ThemeContext, themes } from "./ThemeSelector";

function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

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
