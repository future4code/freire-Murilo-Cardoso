import  { createTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors';


const theme = createTheme ({
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

export default theme;