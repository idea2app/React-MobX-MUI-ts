import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
/**
 * @link https://mui.com/material-ui/customization/css-theme-variables/usage/#typescript
 */
import type {} from '@mui/material/themeCssVarsAugmentation';
/**
 * @link https://mui.com/x/react-data-grid/getting-started/#typescript
 */
import type {} from '@mui/x-data-grid/themeAugmentation';

import { PageFrame } from '.';

/**
 * @see {@link https://mui.com/material-ui/customization/css-theme-variables/configuration/} for more details about CSS variables configuration
 * @see {@link https://mui.com/material-ui/customization/palette/#color-schemes} for more details about color theme configuration.
 */
export const theme = createTheme({
  colorSchemes: { dark: true },
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data'
  }
});

export const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      <PageFrame />
    </ThemeProvider>
  </StyledEngineProvider>
);
