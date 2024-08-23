// react
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// resources
import './App.css';
// components and pages
import Steps from './components/Steps';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

// App component
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/steps" element={<Steps />} />
        </Routes>
    </Router>
  );
}
