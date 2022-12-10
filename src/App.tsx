import * as React from 'react'
import {useMemo} from 'react'
import {createTheme, ThemeProvider} from "@mui/material";
import {useAppSelector} from "./redux/store";
import {RouterConfig} from "./navigation";
import {defaultTheme} from "./styles/theme";

export const App = () => {
  const colorScheme = useAppSelector(state => state.theme)
  const theme = useMemo(() => createTheme(defaultTheme(colorScheme.mode)), [colorScheme])

  return (
    <ThemeProvider theme={theme}>
      <RouterConfig/>
    </ThemeProvider>
  );
}
