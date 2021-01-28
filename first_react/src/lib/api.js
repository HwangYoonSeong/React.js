import axios from 'axios';

export function getAPOD (date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=e7CBelksVom2ecs6snmwuP8p8s2SXEzg2uwzL3pA&date=${date}`);
}