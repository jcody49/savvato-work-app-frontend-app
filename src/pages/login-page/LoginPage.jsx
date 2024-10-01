import React, { useState, useEffect } from 'react';
import { environment } from "../../_environment/environment";
import { Link, useLocation } from "react-router-dom";

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const location = useLocation();

    useEffect(() => {
        if (location.state?.success) {
            setSuccessMessage('Your account was created successfully! Please log in.');
        }
    }, [location.state]);

    const handleLogin = async () => {

        try {
            const response = await fetch(environment.apiUrl + '/public/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const token = response.headers.get('Authorization');

            if (token) {
                sessionStorage.setItem('jwtToken', token);
                const userData = await response.json();
                console.log('Login successful:', userData);
                setSuccessMessage('Login successful!');
            } else {
                throw new Error('Token not found in response headers');
            }

        } catch (error) {
            setError(error.message);
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <br />
            New here? <Link to="/new-user-page" className="App-link">Create an Account</Link>
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
