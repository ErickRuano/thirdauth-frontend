import {request} from './request'

export const getProfile = async (id) => {
    const url = `/api/project/${id}`
    let {response} = await request(url, 'get', {})
    return response.data || response
}

export const getProfiles = async () => {
    const url = `/api/project`
    let {response} = await request(url, 'get', {})
    return response.data || response
}

export const addOne = async (body) => {
    const url = `/api/project`
    let {response} = await request(url, 'post', body)
    return response.data || response
}

export const updateOne = async (body) => {
    const url = `/api/project/${body.id}`
    let {response} = await request(url, 'put', body)
    return response.data || response
}

export const deleteOne = async (id) => {
    const url = `/api/project/${id}`
    let {response} = await request(url, 'delete', {})
    return response.data || response
}