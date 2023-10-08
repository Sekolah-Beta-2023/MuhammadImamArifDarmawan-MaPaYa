import httpClient from '../services/httpClient'

const getProducts = async () => httpClient.get('/rest/v1/products?select=*')
const getDetailProduct = async (id) => httpClient.get(`/rest/v1/products?id=eq.${id}&select=*`)
const getCommentProduct = async (id) => httpClient.get(`/rest/v1/products?id=eq.${id}&select=id,comments(*)`)
const createProduct = async (body) => httpClient.post(`/rest/v1/products`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const updateProduct = async (id, body) => httpClient.patch(`/rest/v1/products?id=eq.${id}`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const deleteProduct = async (id) => httpClient.delete(`/rest/v1/products?id=eq.${id}`)

export {
    getProducts,
    getDetailProduct,
    createProduct,
    getCommentProduct,
    updateProduct,
    deleteProduct
}
