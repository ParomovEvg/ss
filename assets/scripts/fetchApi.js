import * as requestTypes from './fetchTypes.js';

const fetchConfig = data => ({
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
})

const API_URL = "http://a0319139.xsph.ru/?1"
// const API_URL = "http://192.168.0.1:3000/"

function req(data){
    console.log(data)
    return fetch(API_URL, fetchConfig(data))
    .then(res => res.json())
}

req.type = requestTypes;

export default req;

