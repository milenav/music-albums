import axios from 'axios';

const API_KEY = 'AIzaSyCUq-4lskM2RIVQfhaXhaR7F6QikjzjZvE'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=${API_KEY}`

    return config;
});

export default instance;