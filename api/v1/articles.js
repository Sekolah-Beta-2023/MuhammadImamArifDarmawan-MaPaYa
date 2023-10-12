import httpClient from '../services/httpClient'

const getArticles = async () => httpClient.get('/rest/v1/articles?select=*')
const getDetailArticle = async (id) => httpClient.get(`/rest/v1/articles?id=eq.${id}&select=*`)
const getCommentArticle = async (id) => httpClient.get(`/rest/v1/articles?id=eq.${id}&select=id,comments(*)`)
const createArticle = async (body) => httpClient.post(`/rest/v1/articles`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const updateArticle = async (id, body) => httpClient.patch(`/rest/v1/articles?id=eq.${id}`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const deleteArticle = async (id) => httpClient.delete(`/rest/v1/articles?id=eq.${id}`)

export {
    getArticles,
    getDetailArticle,
    createArticle,
    getCommentArticle,
    updateArticle,
    deleteArticle
}
