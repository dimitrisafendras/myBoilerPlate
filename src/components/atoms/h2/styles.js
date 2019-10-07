import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles(theme => {
  const { palette } = theme;
  return {
    h2: {
      overflowWrap: 'break-word',
    },
  };
});