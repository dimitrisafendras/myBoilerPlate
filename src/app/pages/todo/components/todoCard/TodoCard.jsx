import { CardMedia, TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { picsUrl } from '../../../../../apis';
import { Text, MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

// TODO: cleanup
export const TodoCard = ({
  toggleTodo,
  editTodo,
  deleteTodo,
  completed,
  text,
  id,
}) => {
  const {
    todoCard,
    activeStyle,
    completedStyle,
    cardActionsStyle,
    cardCta,
    deleteCta,
    content,
  } = useStyles();

  const handleChange = event => editTodo(event.target.value);

  return (
    <Card
      raised
      className={`${todoCard} ${completed ? completedStyle : activeStyle}`}
    >
      <CardActionArea>
        <CardContent className={content}>
          <img src={`${picsUrl}${id}`} alt="random pic" />
          <Text text={text} />
        </CardContent>
      </CardActionArea>
      <CardActions className={cardActionsStyle}>
        <TextField onChange={handleChange} value={text} autoFocus />
        <MainButton
          text={completed ? 'Activate Task' : 'Complete Task'}
          onClick={toggleTodo}
          color={`${completed ? 'primary' : 'secondary'}`}
          className={cardCta}
        />
        <MainButton
          text="DELETE"
          onClick={deleteTodo}
          className={`${cardCta} ${deleteCta}`}
        />
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
  id: PropTypes.string,
};

TodoCard.defaultProps = {
  text: '',
};
