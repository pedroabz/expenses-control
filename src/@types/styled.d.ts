import { Palette, PaletteOptions } from '@mui/material/styles'
import { defaultTheme } from '../themes/muiTheme'

type ThemeType = typeof defaultTheme

declare module '@mui/material/styles' {
  export interface Palette extends PaletteOptions {
    green: {
      300: string
      500: string
      700: string
    }
    red: {
      300: string
      500: string
      700: string
    }
  }
  interface PaletteOptions {
    green?: Palette['green']
    red?: Palette['red']
  }

  export interface Theme extends ThemeType {}
}
