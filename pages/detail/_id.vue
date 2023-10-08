<template>
<div id="detail">
  <div class="container">
    <div class="row pt-5 pb-5 ">
      <div class="col-lg-5 col-12 mb-3">
        <img class="blog-img" :src="product?.image?.length > 0 ? `${originalApi}/storage/v1/object/public/${product?.image}`: 'https://flowbite.com/docs/images/blog/image-1.jpg'">
      </div>
      <div class="col-lg-6 col-12">
            <button type="button" class="btn text-center" style="background-color: #F7E1AE;" @click="onEdit">Edit artikel</button>
            <button type="button" @click="handleDelete(product?.id)" class="btn btn-danger">Delete artikel</button>
        <h3>{{ product?.title }}</h3>
        <p>{{ product?.content }}</p>
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
            product_id: params?.id,
            originalApi: env?.supabaseApi
        }
    },
    computed: {
        ...mapState('products', ['product']),
        // ...mapState('comments', ['comment']),
    },
    mounted() {
        this.fetchDetailProduct(this.product_id);
    },
    methods: {
        ...mapActions('products', ['fetchDetailProduct', 'removeProduct']),
      onEdit() {
      this.$router.push(`/form/${this.product_id}/edit`)
    },
    async handleDelete(productId) {
            try {
                await this.removeProduct(productId);
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
