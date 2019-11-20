import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    modal: {
      height: '100px',
      width: '100px',
      backgroundColor: 'red',
    },
  };
});
