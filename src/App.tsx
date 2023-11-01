import { defaultTheme } from './styles/themes/default'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { GlobalStyle } from './styles/themes/globalStyles'
import { Transactions } from './pages/Transactions'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}

export default App
