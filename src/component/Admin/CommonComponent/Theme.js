
import { createTheme} from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: "#3c8dbc",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1200,
      xl: 1400,
    },
  },


});
