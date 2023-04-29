import { makeStyles } from "@mui/styles-ui/core";
import { useTheme } from '@mui/material/styles';

export default makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));
  