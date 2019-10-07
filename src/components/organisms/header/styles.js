import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles(theme => {
  const { palette } = theme;
  return {
    header: {
      height: '100%',
      backgroundColor: palette.primary.main,
    },
  };
});
