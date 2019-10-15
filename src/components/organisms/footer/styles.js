import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    footer: {
      height: '100%',
      backgroundColor: fade(palette.secondary.main, 0.2),
    },
  };
});
