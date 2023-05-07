import axios from 'axios';

const BASE_URL = "https://fp87yy0ct5.execute-api.us-east-1.amazonaws.com"


export default axios.create({
    withCredentials: false,
    baseURL: BASE_URL
})
