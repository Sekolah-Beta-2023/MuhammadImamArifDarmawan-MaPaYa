import { createComment, deleteComment, getDetailComment, getComments, updateComment } from '~/api/v1/comments';

export default {
  namespaced: true,
  state () {
      return {
        comments: [],
        comment: null,

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
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    SET_COMMENT(state, comment) {
      state.comment = comment;
    },
  },
  actions: {
      async fetchComments({ commit }) {
        try {
            const response = await getComments();
            if(response.status === 200) {
              const comments = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_COMMENTS', comments)
            }
        } catch (error) {
            console.error(error);
        }
      },
      async fetchDetailComment({ commit }, id) {
        try {
            const response = await getDetailComment(id);
            if(response.status === 200) {
              const comment = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_COMMENT', comment[0])
            }
        } catch (error) {
            console.error(error);
        }
      },
      async storeComment({ commit }, body) {
        try {
          const response = await createComment(body);
          console.log(response);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      },
      async editComment({ commit }, { id, body }) {
        try {
          const response = await updateComment(id, body);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      },
      async removeComment({ commit }, id) {
        try {
          const response = await deleteComment(id);
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
