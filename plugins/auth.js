import { setClient } from '../api/services/authClient';

export default ({ app, store }) => {
  const authApi = process?.env?.supabaseApi
  app.$axios = app.$axios.create({
    headers: {
      apiKey: process?.env?.supabaseKey,
      common: {
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
      Authorization: process.server ? '' : `Bearer ${localStorage.getItem('access_token')}`,
    }
  })

  // Set baseURL to something different
  app.$axios.setBaseURL(authApi)
  setClient(app.$axios)
}
