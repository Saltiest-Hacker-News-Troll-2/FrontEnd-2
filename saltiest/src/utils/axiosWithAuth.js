import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            // Should be a token, postponed until I can communicate with the back end.
            authorization: token
        },
        // The url the api is without any endpoints attached
        baseURL: 'https://troll-findr.herokuapp.com/api'
    });
}