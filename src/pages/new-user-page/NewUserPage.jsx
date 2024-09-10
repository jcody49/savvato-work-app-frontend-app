import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { environment } from "../../_environment/environment";
import { Link } from "react-router-dom";

function NewUserPage() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSuccess = () => {
        setSuccess('Your account was created!');
        setTimeout(() => {
            navigate('/login-page', { state: { success: true } });
        }, 2000);
    };

    const handleFormSubmit = async () => {

        if (password !== passwordConfirmation) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch(environment.apiUrl + '/public/new-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, password }),
            });

            if (response.ok) {
                setError('');
                handleSuccess(); // Call the separate function
            } else if (response.status === 400) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error || 'Create New User failed');
            }

        } catch (error) {
            setError(error.message);
            console.error('Error during create new user:', error);
        }
    };

    return (
        <div>
            <h2>Create New User</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
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
            <input
                type="password"
                placeholder="Confirm your password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br />
            <br />
            <Link to="/login-page" className="App-link">Cancel</Link>
            <br />
            <br />
            <button onClick={handleFormSubmit}>Sign Me Up!</button>
        </div>
    );
}

export default NewUserPage;
