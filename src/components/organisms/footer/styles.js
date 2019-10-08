import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    footer: {
      height: '100%',
      backgroundColor: palette.primary.main,
    },
  };
});
