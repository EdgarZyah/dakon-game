import React from 'react';
import './App.css';
import Game from './components/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';


const App = () => {
    return (
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomeScreen/>} />
              <Route path="/game" element={<Game/>} />
            </Routes>
          </div>
        </Router>
      );
};

export default App;
