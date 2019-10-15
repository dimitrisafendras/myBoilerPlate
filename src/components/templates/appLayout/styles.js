import { makeStyles } from '@material-ui/styles';
import image from '../../../static/bg1.jpg';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    appLayout: {
      minHeight: '100vh',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    },
  };
});
