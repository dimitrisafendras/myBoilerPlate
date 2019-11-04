import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    todoCard: {
      margin: '5px',
      width: '150px',
      wordWrap: 'break-word',
    },
    activeStyle: {
      backgroundColor: palette.primary.main,
    },
    completedStyle: {
      backgroundColor: palette.secondary.main,
    },
  };
});
