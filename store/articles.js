import { createArticle, deleteArticle, getDetailArticle, getArticles, updateArticle,getCommentArticle } from '~/api/v1/articles';

export default {
  namespaced: true,
  state () {
      return {
        articles: [],
        article: null,

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
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_ARTICLE(state, article) {
      state.article = article;
    },
  },
  actions: {
      async fetchArticles({ commit }) {
        try {
            const response = await getArticles();
            if(response.status === 200) {
              const articles = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_ARTICLES', articles)
            }
        } catch (error) {
            console.error(error);
        }
      },
      async fetchDetailArticle({ commit }, id) {
        try {
            const response = await getDetailArticle(id);
            if(response.status === 200) {
              const article = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_ARTICLE', article[0])
            }
        } catch (error) {
            console.error(error);
        }
      },
      async fetchCommentArticle({ commit }, id) {
        try {
            const response = await getCommentArticle(id);
            if(response.status === 200) {
              const articles = response?.data
              const { status, statusText } = response;
              commit('SET_RESPONSE', { statusText, status });
              commit('SET_ARTICLE', articles)
            }
        } catch (error) {
            console.error(error);
        }
      },
      async storeArticle({ commit }, body) {
        try {
          const response = await createArticle(body);
          console.log(response);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      },
      async editArticle({ commit }, { id, body }) {
        try {
          const response = await updateArticle(id, body);
          if(response.status === 200) {
            const { status, statusText } = response
            commit('SET_RESPONSE', { statusText, status });
          }
        } catch (error) {
          console.error(error);
        }
      },
      async removeArticle({ commit }, id) {
        try {
          const response = await deleteArticle(id);
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
