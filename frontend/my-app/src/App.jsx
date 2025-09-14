import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BudgetPage from './pages/BudgetPage';
import HolidayAIPage from './pages/HolidayAIpage';
import Map from './pages/map';
import './styles.css';
import Login from './pages/Login';
import MapsComponent from './pages/map';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/holiday-ai" element={<HolidayAIPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<MapsComponent />} />
      </Routes>
    </Router>
  );
}

export default App;