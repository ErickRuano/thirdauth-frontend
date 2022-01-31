import axios from 'axios'

const BASE = 'https://api.thirdauth.com'

const request = (url, method, params) => {
    return new Promise((resolve, reject) => {
        axios[method](BASE + url, {
            ...params,
            headers: {
                authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI5ZDFhYTczYy03YjhhLTRlZjgtYjA5OS0xMjkxOThlZDdmZGIiLCJ3YWxsZXQiOiIweEM5Y2QxNzFjMjNkMTk2MkU3M2UwQTQwNDVGN0U0Q2Y1RjBmNkRmMTMiLCJwcm9qZWN0cyI6W119fSwiaWF0IjoxNjQzNjAwNjM1LCJleHAiOjE2NDM2MDQyMzV9.M_x9P1tVI-6S_H4MNJHawsiRxL19gJsrY98C2_GoCxg',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default request