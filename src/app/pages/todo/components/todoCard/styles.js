import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    todoCard: {
      margin: '5px',
      width: '200px',
      wordWrap: 'break-word',
    },
    activeStyle: {
      backgroundColor: palette.primary.main,
    },
    completedStyle: {
      backgroundColor: palette.secondary.main,
    },
    cardActionsStyle: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardCta: {
      margin: '8px 0 0 0',
    },
    deleteCta: {
      backgroundColor: palette.error.main,
    },
  };
});
