import httpClient from '../services/httpClient'

const getComments = async () => httpClient.get('/rest/v1/comments?select=*')
const getDetailComment = async (id) => httpClient.get(`/rest/v1/comments?id=eq.${id}&select=*`)
const createComment = async (body) => httpClient.post(`/rest/v1/comments`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const updateComment = async (id, body) => httpClient.patch(`/rest/v1/comments?id=eq.${id}`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const deleteComment = async (id) => httpClient.delete(`/rest/v1/comments?id=eq.${id}`)

export {
    getComments,
    getDetailComment,
    createComment,
    updateComment,
    deleteComment
}
