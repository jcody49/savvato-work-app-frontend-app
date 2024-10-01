import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
// import { navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import LoginPage from './pages/login-page/LoginPage';

import CreateStepView from './pages/create-step-view/create-step-view.jsx';
import NewUserPage from './pages/new-user-page/NewUserPage';


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
      <br />
      <Link to="/create-step-view" className="App-link">Create a New Step</Link> {/* Link to CreateStepView */}
    </div>
    );
}

function HandleSuccess(component) {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/login-page', { state: { success: true}});
    }, 2000);

    return (
        <div>
            <NewUserPage onSuccess={HandleSuccess}/>
        </div>
    )
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
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/new-user-page" element={<NewUserPage onSuccess={HandleSuccess}/>} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/create-step-view" element={<CreateStepView />} />
        </Routes>
    </Router>
  );
}

export default App;
