import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import LoginPage from './pages/login-page/LoginPage';

// NewPage component

function NewPage() {
  return (
    <div>
      <h2>New Page</h2>
      <p>This is a new page.</p>
        <Link to="/" className="App-link">Go to Home</Link>
    </div>
  );
}

function Home() {
    return (
        <div>
        <h2>Home</h2>
        <p>Welcome to the home page.</p>
            <Link to="/new-page" className="App-link">Go to New Page</Link>
        </div>
    );
}

// App component
function App() {
  const isLoggedIn = sessionStorage.getItem('jwtToken');
  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login-page" replace />}
          />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
    </Router>
  );
}

export default App;
