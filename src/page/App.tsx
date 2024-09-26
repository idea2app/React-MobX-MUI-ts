import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { PageFrame } from ".";

export const theme = createTheme({ cssVariables: true, colorSchemes: { dark: true } });


export function App() {
    return <ThemeProvider theme={theme}> <CssBaseline />
    <PageFrame />
    </ThemeProvider>;
}