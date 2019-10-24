import React from 'react';
import { Text } from '../../components';
import { useStyles } from './styles';

export const AboutUs = () => {
  const { aboutUs } = useStyles();
  return (
    <div className={aboutUs}>
      <Text text="sdfgsdfg" variant="h1" />
      <Text text="sdfgsdfg" variant="h2" />
      <Text text="sdfgsdfg" variant="h3" />
      <Text text="sdfgsdfg" variant="h4" />
    </div>
  );
};

AboutUs.propTypes = {};

AboutUs.defaultProps = {};
