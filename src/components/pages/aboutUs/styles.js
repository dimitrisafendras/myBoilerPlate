import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles(theme => {
  const { palette } = theme;
  return {
    aboutUs: {
      backgroundColor: palette.primary.main,
    },
  };
});
