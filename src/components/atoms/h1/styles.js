import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    h1: {
      overflowWrap: 'break-word',
    },
  };
});
