import React from 'react';
import { map } from 'lodash-es';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { Text } from '../../atoms';

export const Card = ({ data }) => {
  const { card } = useStyles();
  return (
    <div className={card}>
      {map(data, data => (
        <Text key={uuid.v1()} text={`${data}`} variant="h4" />
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.any,
};

Card.defaultProps = {};
