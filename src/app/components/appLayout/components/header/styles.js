import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    header: {
      height: '100%',
      backgroundColor: fade(palette.primary.dark, 0.2),
    },
    link: {
      margin: '0 20px',
    },
  };
});
