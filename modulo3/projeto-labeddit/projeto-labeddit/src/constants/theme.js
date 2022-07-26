import  createMuiTheme from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors';




export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrasText: "White"
    },
    text: {
        primary: neutralColor
    }
    },
  },
  );
