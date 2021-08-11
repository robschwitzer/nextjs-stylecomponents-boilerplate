import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import themes from "styles/Themes";
import { TTheme } from "types";

export function withLayout(WrappedComponent: Function) {
  return function WithLayout(props: any): JSX.Element {
    const [theme, setTheme] = useState<TTheme>(themes.dark);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WrappedComponent {...props} themeProps={{ theme, setTheme }} />
      </ThemeProvider>
    );
  }
};
