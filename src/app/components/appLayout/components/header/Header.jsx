import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';

// TODO: ask if routes should be passed as prop, reminder there is an extra layer 'AppLayout' before header tha doesnt need to know
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
      {map(routes, (page, url) => (
        <Link key={uuid.v1()} to={url}>
          {page.title}
        </Link>
      ))}
    </Box>
  );
};

Header.propTypes = {};

Header.defaultProps = {};
