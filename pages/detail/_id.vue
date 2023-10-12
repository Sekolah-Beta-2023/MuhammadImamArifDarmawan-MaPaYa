<template>
<div id="detail">
  <div class="container">
    <div class="row pt-5 pb-5 ">
      <div class="col-lg-5 col-12 mb-3">
        <img class="blog-img" :src="article?.image?.length > 0 ? `${originalApi}/storage/v1/object/public/images/${article?.image}`: 'https://img.freepik.com/free-photo/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate_1150-27184.jpg?'">
      </div>
      <div class="col-lg-6 col-12">
        <div v-if="user">
            <button type="button" class="btn text-center" style="background-color: #F7E1AE;" @click="onEdit">Edit artikel</button>
            <button type="button" @click="handleDelete(article?.id)" class="btn btn-danger">Delete artikel</button>
        </div>
        <h3>{{ article?.title }}</h3>
        <p v-html="article?.content"></p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import httpClient from "~/utils/httpClient"

// export default {
//   data() {
//     return {
//       title: "",
//       content: "",
//       image: "",
//       articleId: "",
//     }
//   },
//   mounted() {
//     const params = this.$route.params
//     this.getDetailData(params?.id)
//   },
//   methods: {
//     async getDetailData(articleId){
//       const response = await httpClient("/rest/v1/article?id=eq." + articleId, "GET")
//       const data = await response.json()

//       this.title = data[0]?.title
//       this.content = data[0]?.content
//       this.articleId = data[0]?.id
//     },
//      onEdit() {
//       this.$router.push(`/form/${this.articleId}/edit`)
//     }
//   }
// }
import { mapActions, mapState } from 'vuex'

export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        return {
            article_id: params?.id,
            originalApi: env?.supabaseApi
        }
    },
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('articles', ['article']),
        // ...mapState('comments', ['comment']),
    },
    mounted() {
        this.fetchDetailArticle(this.article_id);
    },
    methods: {
        ...mapActions('articles', ['fetchDetailArticle', 'removeArticle']),
      onEdit() {
      this.$router.push(`/form/${this.article_id}/edit`)
    },
    async handleDelete(articleId) {
            try {
                await this.removeArticle(articleId);
                setTimeout(() => {
                    this.$router.push("/");
                },2000)
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>
<style scoped>
#detail{
  background: var(--bg-color-3);
}
.blog-img{
  width: 100%;
}


</style>
