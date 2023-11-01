import { defaultTheme } from "./styles/themes/default"
import { ThemeProvider, CssBaseline} from '@mui/material';
import {GlobalStyle} from "./styles/themes/globalStyles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline/>
      <GlobalStyle/>
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
