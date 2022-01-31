import axios from 'axios'

const BASE = 'https://api.thirdauth.com'

const request = (url, method, params) => {
    return new Promise((resolve, reject) => {
        axios[method](BASE + url, params, )
        .then(response => {
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default request