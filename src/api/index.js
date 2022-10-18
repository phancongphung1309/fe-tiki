import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method,
        url: `${process.env.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
