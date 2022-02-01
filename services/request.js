import axios from 'axios'

const BASE = 'https://api.thirdauth.com'

export const instance = axios.create({
    baseURL: BASE,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        authorization: `${ (typeof window !== "undefined") ? localStorage.getItem('token') : null}`,
    }
  });
  

export const request = (url, method, params) => {
    instance.defaults.headers['authorization'] = `${ (typeof window !== "undefined") ? localStorage.getItem('token') : null}`
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

// export default request