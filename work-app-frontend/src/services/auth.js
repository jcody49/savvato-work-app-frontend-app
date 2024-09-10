import axios from "axios"

const baseUrl = '/public'

// Signup request to Backend
const registerUser = async(userInformation) => {
    try {
        const response = await axios.post(`${baseUrl}/signup`, userInformation)
        return response.data
    } 
    catch (error) {
        console.error('ERROR during User Registration : ', error)
        throw error    
    }
}

// Login request to Backend
const authenticateUser = async(userInformation) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userInformation)
        return response.data    
    } 
    catch (error) {
        console.error('ERROR during User Login : ', error);
        throw error        
    }
}

export default { registerUser, authenticateUser }