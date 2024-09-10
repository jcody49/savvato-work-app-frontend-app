import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function Home() {
    // styles
    const menuDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        border: '2px solid grey',
        borderRadius: '10px',
        width: '100%',
    }
    // const formDivStyle = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     padding: '2rem',
    //     marginTop: '1rem',
    //     border: '1px solid lightblue',
    //     borderRadius: '10px',
    //     width: '100%',
    //     innerHeight: '5vh',
    //     gap: '2rem',
    // }
    const buttonStyle = {
        margin: '0.5rem 0',
    }

    // setup state variables
    // const [task, setTask] = useState('')
    // const navigate = useNavigate()

    // retrieve user token for the current session, i.e., as long as user is logged-in
    // useEffect(() => {
    //     window.sessionStorage.getItem('authorizedUser')
    // }, [])

    /**
     * Updates the task value in the state.
     * 
     * @param {Event} e - The event object.
     * @returns {void}
     */
    // const recordTask = (e) => {
    //     setTask(e.target.value) // used in generateSteps()
    //     console.log('Task name: ',task)
    // }
    
    /**
     * Redirects to the authentication page.
     */
    // const verifyUser = () => {
    //     // if authorized navigate to steps
    //     // if not, navigate to signup and then login
    // }

    /**
     * Generates steps and navigates to '/steps' with the given task state.
     */
    // const generateSteps = () => {
    //     navigate('/steps', { state: { taskName: task } });
    // }

    return (
        <div>
            <h2>Welcome to Work App!</h2>
            <div style={menuDivStyle}>
                <button style={buttonStyle}>
                    <Link to="/signup" className="App-link">Signup</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/login" className="App-link">Login</Link>
                </button>
            </div>
            {/* <div style={formDivStyle}>
            <form onSubmit={generateSteps}>
                <label>
                    <input 
                        type="text"
                        placeholder="What Task would you like to Create Steps for ?" 
                        onChange={recordTask}
                        style={{ textAlign: 'center', width: '100%' }}
                        required
                    />
                </label>
                <button 
                    // onClick={verifyUser} // soon to be implemented
                    // redirect to <Steps />, for now
                    type="submit" 
                    style={buttonStyle}
                >
                    Create Steps
                </button>
            </form> 
            </div> */}
        </div>
    );
}
