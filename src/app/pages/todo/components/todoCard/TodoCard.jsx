import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Text, MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

export const TodoCard = ({ onClick, completed, text }) => {
  const { todoCard } = useStyles();
  return (
    <Card raised className={todoCard}>
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
