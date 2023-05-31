import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('Light');

const ThemeProvider = props => {
  const [appTheme, setAppTheme] = useState('Light');
  const [theme, setTheme] = useState(['White', 'Black']);
  const styles = {
    mainPage: {
      backgroundColor: theme[0],
      color: theme[1],
    }
  }

  useEffect(() => {
    appTheme === 'Light' ? setTheme(['White', 'Black']) : setTheme(['Black', 'White'])
    console.log(theme)
  }, [appTheme])

  return (
    <ThemeContext.Provider value={[ appTheme, setAppTheme ]}>
      <div style={styles.mainPage}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
