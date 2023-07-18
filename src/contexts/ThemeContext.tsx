import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('Light');

const ThemeProvider = props => {
  const [appTheme, setAppTheme] = useState('Light');

  const styles = {
    mainPage: {
      backgroundColor: appTheme === 'Light' ? 'White' : 'Black',
      color: appTheme === 'Light' ? 'Black' : 'White',
    }
  };

  useEffect(() => {
    console.log(styles);
  }, [appTheme]);

  return (
    <ThemeContext.Provider value={[appTheme, setAppTheme]}>
      <div style={styles.mainPage}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
