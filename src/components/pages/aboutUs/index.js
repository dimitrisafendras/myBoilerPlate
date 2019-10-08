import React from 'react';
import { H1, H2, H3, H4 } from '../../atoms';
import { useStyles } from './styles';

export const AboutUs = () => {
  const { aboutUs } = useStyles();
  return (
    <div className={aboutUs}>
      <H1>ASDLFKJHASDFLKJH</H1>
      <H2>ASDLFKJHASDFLKJH</H2>
      <H3>ASDLFKJHASDFLKJH</H3>
      <H4>ASDLFKJHASDFLKJH</H4>
    </div>
  );
};
