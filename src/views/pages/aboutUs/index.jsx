import React from 'react';
import { H1, H2, H3, H4 } from '../../components';
import { useStyles } from './styles';

export const AboutUs = () => {
  const { aboutUs } = useStyles();
  return (
    <div className={aboutUs}>
      <H1 text="sdfgsdfg" />
      <H2 text="sdfgsdfg" />
      <H3 text="sdfgsdfg" />
      <H4 text="sdfgsdfg" />
    </div>
  );
};
