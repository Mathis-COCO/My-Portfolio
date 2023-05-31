import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Navbar from './components/common/Navbar';
import './index.scss'
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />}/>
          </Routes>
      </Router>      
    </ThemeProvider>

  );
}

export default App;
