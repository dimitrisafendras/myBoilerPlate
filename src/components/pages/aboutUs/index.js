import React from 'react';
import { useTheme } from '@material-ui/styles';
import { H1, H2, H3, H4 } from '../../atoms';
import { styles } from './styles';

export const AboutUs = () => {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        height: '100px',
        width: '100px',
      }}
    >
      <H1>ASDLFKJHASDFLKJH</H1>
      <H2>ASDLFKJHASDFLKJH</H2>
      <H3>ASDLFKJHASDFLKJH</H3>
      <H4>ASDLFKJHASDFLKJH</H4>
    </div>
  );
};
