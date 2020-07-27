import React, { createContext } from 'react';

const theme = {
  primary: '#333',
  secondary: '#eee',

  primaryStrong: '#000',
  secondaryStrong: '#eee',

  modes: {
    success: {
      primary: 'lightgreen',
      secondary: '#fff',

      primaryStrong: 'lightgreen',
      secondaryStrong: '#000',
    },
    warning: {
      primary: 'gold',
      secondary: '#fff',

      primaryStrong: 'gold',
      secondaryStrong: '#000',
    },
    error: {
      primary: 'darkred',
      secondary: '#fff',

      primaryStrong: 'red',
      secondaryStrong: '#fff',
    },
  },

  large: '1.5rem',
  medium: '1rem',
  small: '.7rem',

  transition: {
    none: 'none',
    fast: '.1s',
    medium: '.3s',
    slow: '1s',
  },

  border: {
    size: '2px',
    type: 'solid',
    color: (p = {}) => themeHandler(p),
  },

  shadow: {
    light: '0 0 5px #eee',
    medium: '0 0 5px #aaa',
    dark: '0 0 5px #000',
  },

  fontSize: {
    mainTitle: '2rem',
    title: '1.4rem',
    subtitle: '1.2rem',
    strong: '1rem',
  },
};

// primary <--> secondary-switch
const typeToggle = {
  primary: 'secondary',
  secondary: 'primary',

  primaryStrong: 'secondaryStrong',
  secondaryStrong: 'primaryStrong',
};

export const themeHandler = ({ mode, colorType = 'primary', inverted }) => {
  let type = colorType || 'primary';
  let path = theme;

  if (mode) {
    type = typeToggle[type];

    path = theme.modes[mode];
  }

  if (inverted) type = typeToggle[type];

  return path[type];
};

export default theme;
