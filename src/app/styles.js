import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles(theme => {
  const { palette } = theme;
  return {
    app: {
      minHeight: '100vh',
      backgroundColor: 'black',
    },
  };
});
