import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <h1>
                DT Money
            </h1>
        </ThemeProvider>
    )
}

