import React, { createContext } from "react";
import myTheme, { themeHandler } from "./myTheme";

const ThemeContext = createContext(null);

const Theme = props => {
  return (
    <ThemeContext.Provider
      value={{
        theme: myTheme,
        themeHandler: themeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;

export const withTheme = Component => props => (
  <ThemeContext.Consumer>
    {({ theme, themeHandler }) => (
      <Component {...props} theme={theme} themeHandler={themeHandler} />
    )}
  </ThemeContext.Consumer>
);
