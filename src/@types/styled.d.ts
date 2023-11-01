import { Theme, Palette, PaletteOptions } from '@mui/material/styles';
import { defaultTheme } from '../themes/muiTheme';

type ThemeType = typeof defaultTheme;

declare module '@mui/material/styles' {
  interface Palette extends PaletteOptions {
    customGreen: {
      300: string;
      500: string;
      700: string;
    };
    customRed: {
      300: string;
      500: string;
      700: string;
    };
  }
  interface PaletteOptions {
    green?: Palette['green'];
    red?: Palette['red'];
  }
  
  interface Theme extends ThemeType {}
}
