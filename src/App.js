import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import './index.scss'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
    </Router>
  );
}

export default App;
