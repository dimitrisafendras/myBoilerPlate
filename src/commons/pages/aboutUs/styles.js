import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    aboutUs: {
      backgroundColor: palette.primary.main,
    },
  };
});
