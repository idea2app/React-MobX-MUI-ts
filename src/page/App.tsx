import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';
/**
 * @link https://mui.com/material-ui/customization/css-theme-variables/usage/#typescript
 */
import type {} from '@mui/material/themeCssVarsAugmentation';
/**
 * @link https://mui.com/x/react-data-grid/getting-started/#typescript
 */
import type {} from '@mui/x-data-grid/themeAugmentation';

import { colorSchemes, shape, typography } from '../component/Layout/themePrimitive';
import { PageFrame } from '.';

/**
 * @see {@link https://mui.com/material-ui/customization/css-theme-variables/configuration/} for more details about CSS variables configuration
 * @see {@link https://mui.com/material-ui/customization/palette/#color-schemes} for more details about color theme configuration.
 */
export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
    cssVarPrefix: 'idea2app'
  },
  colorSchemes,
  typography,
  shadows,
  shape
});

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <PageFrame />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
