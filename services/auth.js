import request from './request'

export const login = async (wallet, signature, message) => {
    const url = '/api/public/authenticate'
        const {response} = await request(url, 'post', { wallet, signature, message })
        return response.data || response
}