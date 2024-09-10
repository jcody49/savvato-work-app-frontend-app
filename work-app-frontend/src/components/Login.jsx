import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authServices from '../services/auth'

export default function Login() {
    // styles
    const formDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        border: '1px solid grey',
        borderRadius: '10px',
    }
    const formStyle = {
        display: 'grid',
        gap: '0.25rem',
        width: '100%',
    }
    const buttonStyle = {
        margin: '0.5rem 0',
    }

    // setup state variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    /**
     * Handles the login functionality.
     *
     * @param {Event} event - The event object.
     * @returns {Promise<void>} - A promise that resolves when the login process is complete.
     */
    const handleLogin = async(event) => {
        event.preventDefault()
        console.log('Username:', username);
        console.log('Password:', password);
        try {   // for error management
            const userInfoPayload = {
                username: username,
                password: password
            }
            // connect to services/auth.js
            const authenticatedUser = await authServices.authenticateUser(userInfoPayload)
            // store user information for the logged-session
            window.sessionStorage.setItem('authorizedUser', JSON.stringify(authenticatedUser))
            // store in state variable from contexts/UserContext.js
            // setUser(authenticatedUser)
            setUsername(null)
            setPassword(null)
            navigate('/') 
        } catch (error) {
            console.error('ERROR during Login : ', error)
            // setup banner notification with 5s timeout
        }
    };

    return (
            <div style={formDivStyle}>
                <h2>Login</h2>
                <form style={formStyle}>
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
                <button type="submit" style={buttonStyle} onClick={handleLogin}>
                    Login
                </button>
                <button type="reset" style={buttonStyle} onClick={() => navigate('/')}>
                    Cancel
                </button>
            </form>       
        </div>
    );
}