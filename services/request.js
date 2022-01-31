import axios from 'axios'

const BASE = 'https://api.thirdauth.com'

const instance = axios.create({
    baseURL: BASE,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        authorization: `${ (typeof window !== "undefined") ? localStorage.getItem('token') : null}`,
    }
  });
  

const request = (url, method, params) => {
    return new Promise((resolve, reject) => {
        instance[method](BASE + url, params)
        .then((response) => {
            resolve({response})
        })
        .catch((error) => {
            reject({error})
        })
    })
}

export default request