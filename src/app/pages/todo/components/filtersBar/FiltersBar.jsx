import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { startCase } from 'lodash-es';
import { MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

export const FiltersBar = ({ filters, setFilterCallback }) => {
  const { filtersBar } = useStyles();
  return filters.map(filter => (
    <MainButton
      onClick={() => setFilterCallback(filter)}
      text={startCase(filter)}
      key={uuid.v1()}
    />
  ));
};

FiltersBar.propTypes = {
  filters: PropTypes.any,
  setFilterCallback: PropTypes.func,
};

FiltersBar.defaultProps = {};
