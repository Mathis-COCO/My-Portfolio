import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/index.tsx';
import Navbar from './components/Header/index.tsx';
import './index.scss'
import ThemeProvider from './contexts/ThemeContext.tsx';

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
