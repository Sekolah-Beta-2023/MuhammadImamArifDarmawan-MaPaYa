import {
  getInformations,
  getDetailInformation,
  createInformation,
  updateInformation,
  deleteInformation } from '~/api/v1/informations';

export default {
  namespaced: true,
  state () {
      return {
        informations: [],
        information: null,

        currentPage: 1, // Halaman saat ini untuk ayat
        perPage: 10,

        status: false,
        message: '',
      };
  },
  getters: {

  },
  mutations: {
    SET_RESPONSE(state, { message, status }) {
      state.message = message;
      state.status = status;
    },
    SET_INFORMATIONS(state, informations) {
      state.informations = informations;
    },
    SET_INFORMATION(state, information) {
      state.information = information;
    },
  },
  actions: {
      async fetchInformations({ commit }) {
        try {
            const response = await getInformations();
            if(response.status === 200) {
              const informations = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_INFORMATIONS', informations)
            }
        } catch (error) {
            console.error(error);
        }
      },
      async fetchDetailInformation({ commit }, id) {
        try {
            const response = await getDetailInformation(id);
            if(response.status === 200) {
              const information = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_INFORMATION', information[0])
            }
        } catch (error) {
            console.error(error);
        }
      },
      async storeInformation({ commit }, body) {
        try {
          const response = await createInformation(body);
          console.log(response);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      },
      async editInformation({ commit }, { id, body }) {
        try {
          const response = await updateInformation(id, body);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      },
      async removeInformation({ commit }, id) {
        try {
          const response = await deleteInformation(id);
          console.log(response);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      }
  }
}
