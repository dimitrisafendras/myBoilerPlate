import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';
import { routes } from '../../../../utils';

export const Header = () => {
  const { header } = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      className={header}
    >
      {map(routes, (value, key) => (
        <Link key={uuid.v1()} to={key}>
          {value.title}
        </Link>
      ))}
    </Box>
  );
};

Header.propTypes = {};

Header.defaultProps = {};
