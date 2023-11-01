import GlobalStyles from '@mui/material/GlobalStyles'

export const GlobalStyle = () => {
  return (
    <GlobalStyles
      styles={(theme) => ({
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        ':focus': {
          outline: 0,
          boxShadow: `0 0 0 2px ${theme.palette.green[500]}`,
        },
        body: {
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.grey[100],
          WebkitFontSmoothing: 'antialiased',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '1rem',
          fontWeight: 400,
        },
        'input, textarea, button': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '1rem',
          fontWeight: 400,
        },
      })}
    />
  )
}
