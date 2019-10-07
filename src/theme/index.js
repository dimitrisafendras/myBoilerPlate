import { red, amber } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: amber.A400,
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  })
);
