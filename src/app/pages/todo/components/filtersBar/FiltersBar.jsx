import { Box } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { startCase } from 'lodash-es';
import { MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

export const FiltersBar = ({ filters, setFilterCallback }) => {
  const { filtersBar } = useStyles();
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around">
      {filters.map(filter => (
        <MainButton
          onClick={() => setFilterCallback(filter)}
          text={startCase(filter)}
          key={uuid.v1()}
          className={filtersBar}
        />
      ))}
    </Box>
  );
};

FiltersBar.propTypes = {
  filters: PropTypes.any,
  setFilterCallback: PropTypes.func,
};

FiltersBar.defaultProps = {};
