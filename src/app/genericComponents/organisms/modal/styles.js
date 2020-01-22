import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    modal: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0, 0.4)',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1',
    },
    innerContainer: {},
  };
});
