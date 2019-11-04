import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    todoCard: {
      width: '150px',
      wordWrap: 'break-word',
    },
  };
});
