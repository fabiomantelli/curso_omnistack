import axios from 'axios';

const api = axios.create({
    baseURL: 'http://200.135.68.7:3333',
});

export default api;