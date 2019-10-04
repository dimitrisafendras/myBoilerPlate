import React from 'react';
import { useTheme } from '@material-ui/styles';
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
    />
  );
};
