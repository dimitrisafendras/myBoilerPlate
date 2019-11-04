import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Text, MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

// TODO: cleanup
export const TodoCard = ({ onClick, completed, text }) => {
  const { todoCard, activeStyle, completedStyle } = useStyles();
  return (
    <Card
      raised
      className={`${todoCard} ${completed ? completedStyle : activeStyle}`}
    >
      <CardContent>
        <Text
          text={text}
          variant="h5"
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        />
      </CardContent>
      <CardActions>
        <MainButton
          text={completed ? 'Activate Task' : 'Complete Task'}
          onClick={onClick}
          color={`${completed ? 'primary' : 'secondary'}`}
        />
      </CardActions>
    </Card>
  );
};

TodoCard.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
};

TodoCard.defaultProps = {};
