import axios from 'axios';

// At the moment not entirely sure I need this, but I may so leaving it here.
export const axiosWithAuth = () => {
    // Initially you'd grab the token here, still waiting on the back end.
    return axios.create({
        headers: {
            // Should be a token, postponed until I can communicate with the back end.
            authorization: 'ssss'
        },
        // The url the api is without any endpoints attached
        baseURL: 'http://localhost:5000'
    });
}