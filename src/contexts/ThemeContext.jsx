import React, { createContext, useState } from 'react';

export const ThemeContext = createContext('Light');

const ThemeProvider = props => {
  const [appTheme, setAppTheme] = useState('Light');

  return (
    <ThemeContext.Provider value={[ appTheme, setAppTheme ]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
