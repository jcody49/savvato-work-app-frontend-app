import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    // styles
    const formDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        border: '1px solid grey',
        borderRadius: '10px',
        width: '100%',
    }
    const formStyle = {
        display: 'grid',
        gap: '0.25rem',
        width: '100%',
    }
    const buttonStyle = {
        margin: '0.5rem 0',
    }

    // setup state variables to handle form input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleShowPasswordChange = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        // Add signup logic here
    };

    return (
        <div style={formDivStyle}>
            <h2>Signup</h2>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text"
                        placeholder="First Name or 'Your' Name" 
                        value={firstName} 
                        onChange={handleFirstNameChange}
                        required 
                    />
                </label>
                <br />
                <label>
                    <input 
                        type="text"
                        placeholder="Last Name or Family Name" 
                        value={lastName} 
                        onChange={handleLastNameChange}
                        required 
                    />                
                </label>
                <br />
                <label>
                    <input 
                        type="text" 
                        placeholder="Most memorable name"
                        value={username} 
                        onChange={handleUsernameChange}
                        required 
                    />
                </label>
                <br />
                <label>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Most random secretive thing" 
                        value={password} 
                        onChange={handlePasswordChange}
                        required
                        autoComplete='' 
                    />
                </label>
                <br />
                <label>
                    Show Password:
                    <input type="checkbox" checked={showPassword} onChange={handleShowPasswordChange} />
                </label>
                <br />
                <button type="submit" style={buttonStyle} onClick={handleSubmit}>
                    Signup
                </button>
                <button type="reset" style={buttonStyle} onClick={() => navigate('/')}>
                    Cancel
                </button>
            </form>
        </div>
    );
};
