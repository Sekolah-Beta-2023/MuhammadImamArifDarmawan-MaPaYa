import httpClient from '../services/httpClient'

const getInformations = async () => httpClient.get('/rest/v1/informations?select=*')
const getDetailInformation = async (id) => httpClient.get(`/rest/v1/informations?id=eq.${id}&select=*`)
const createInformation = async (body) => httpClient.post(`/rest/v1/informations`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const updateInformation = async (id, body) => httpClient.patch(`/rest/v1/informations?id=eq.${id}`, body, { headers: {
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
}})
const deleteInformation = async (id) => httpClient.delete(`/rest/v1/informations?id=eq.${id}`)

export {
    getInformations,
    getDetailInformation,
    createInformation,
    updateInformation,
    deleteInformation
}
