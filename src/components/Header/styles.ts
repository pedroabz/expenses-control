import { styled } from '@mui/material/styles'
import { Button, Box } from '@mui/material'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: '2.5rem 0 7.5rem',
}))

export const HeaderContent = styled(Box)({
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const LogoImage = styled('img')({
  width: '100%',
  maxWidth: '100px',
  height: 'auto',
})

export const NewTransactionButton = styled(Button)(({ theme }) => ({
  height: '50px',
  border: 0,
  background: theme.palette.green[500],
  color: theme.palette.common.white,
  fontWeight: 'bold',
  padding: '0 1.25rem',
  borderRadius: '6px',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.green[700],
    transition: 'background-color 0.2s',
  },
}))
