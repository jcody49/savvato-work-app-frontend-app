import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Steps() {
    // styles
    const buttonMenuDivStyle = {
        display: 'flex',
        flexDirection: 'column',
    }
    const buttonStyle = {
        margin: '0.5rem 0',
    }
    
    // setup routing to retrieve prop from <Home />
    const navigate = useNavigate()
    const location = useLocation()
    const { taskName } = location.state || {}

    return (
        <div>
            <h2>Steps to accomplishing &quot;{taskName.toUpperCase()}&quot;</h2>
            <div>
                <p>&quot;{taskName.toUpperCase()}&quot;</p>
                <ol>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, earum.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ol>
            </div>
            <div style={buttonMenuDivStyle}>
                <button style={buttonStyle}>
                    Hire Professional to do this for Me!
                </button>
                <button type="reset" style={buttonStyle} onClick={() => navigate('/')}>
                    Return Home
                </button>
            </div>
        </div>
    );
}

Steps.propTypes = {
    taskName: PropTypes.string.isRequired,
}