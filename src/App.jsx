// react
import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// resources
import './App.css';
import logo from './logo.svg';
// components and pages
import NewPage from './components/NewPage';
import LoginPage from './pages/login-page/LoginPage';
import Home from './components/Home';

// App component
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Add this if you want a default landing page */}
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
