
import authClient from '../services/authClient'

const signin = async (body) => authClient.post('/auth/v1/token?grant_type=password', body)
const refresh = async (body) => authClient.post('/auth/v1/token?grant_type=refresh_token', body)
const signup = async (body) => authClient.post('/auth/v1/signup', body)
const magiclink = async (body) => authClient.post('/auth/v1/magiclink', body)
const recover = async (body, token) => authClient.put('/auth/v1/user', body, {
    headers: {
        'Authorization': 'Bearer ' + token
    }
})
const signout = async () => authClient.post('/auth/v1/logout')
const fetchMe = async () => authClient.get('/auth/v1/user')

export {
    signin,
    refresh,
    signup,
    magiclink,
    recover,
    signout,
    fetchMe,
}
