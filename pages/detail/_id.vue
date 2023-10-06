<template>
  <div class="container">
    <div class="row pt-5 pb-5 ">
      <div class="col-lg-5 col-12">
        <img class="blog-img" src="../../assets/images/telurpuyuhsantan.jpg">
      </div>
      <div class="col-lg-6 col-12 ">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
      </div>
      <button type="button" class="btn btn-primary" @click="onEdit">Edit artikel</button>
    </div>
  </div>
</template>

<script>
import httpClient from "~/utils/httpClient"

export default {
  data() {
    return {
      title: "",
      content: "",
      image: "",
      articleId: "",
    }
  },
  mounted() {
    const params = this.$route.params
    this.getDetailData(params?.id)
  },
  methods: {
    async getDetailData(articleId){
      const response = await httpClient("/rest/v1/article?id=eq." + articleId, "GET")
      const data = await response.json()

      this.title = data[0]?.title
      this.content = data[0]?.content
      this.articleId = data[0]?.id
    },
     onEdit() {
      this.$router.push(`/form/${this.articleId}/edit`)
    }
  }
}
</script>
