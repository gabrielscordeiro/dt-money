import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";
import { Transactions } from "./pages/Transactions";

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Transactions />
        </ThemeProvider>
    )
}

