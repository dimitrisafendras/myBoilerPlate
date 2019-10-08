import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    appLayout: {
      minHeight: '100vh',
    },
  };
});
