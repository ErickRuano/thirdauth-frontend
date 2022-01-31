import request from './request'

export const getProfile = async (id) => {
    const url = `/api/project/${id}`
    const response = await request(url, 'get', {})
    return response
}