import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Text, MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

// TODO: cleanup
export const TodoCard = ({
  toggleTodo,
  editTodo,
  deleteTodo,
  completed,
  text,
}) => {
  const {
    todoCard,
    activeStyle,
    completedStyle,
    cardActionsStyle,
    cardCta,
    deleteCta,
  } = useStyles();

  const handleChange = event => editTodo(event.target.value);

  return (
    <Card
      raised
      className={`${todoCard} ${completed ? completedStyle : activeStyle}`}
    >
      <CardActionArea>
        <CardContent>
          <Text
            text={text}
            variant="h5"
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions className={cardActionsStyle}>
        <TextField onChange={handleChange} value={text} />
        <MainButton
          text={completed ? 'Activate Task' : 'Complete Task'}
          onClick={toggleTodo}
          color={`${completed ? 'primary' : 'secondary'}`}
          className={cardCta}
        />
        <MainButton text="DELETE" onClick={deleteTodo} className={deleteCta} />
      </CardActions>
    </Card>
  );
};

TodoCard.propTypes = {
  toggleTodo: PropTypes.func,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
};

TodoCard.defaultProps = {
  text: '',
};
