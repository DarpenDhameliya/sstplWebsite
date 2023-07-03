import axios from 'axios';
const instance = axios.create({baseURL: 'http://192.168.0.235:5000/api'});
// const instance = axios.create({baseURL: process.env.REACT_APP_BASE_URL});

export default instance
