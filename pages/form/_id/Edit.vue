<template>
  <div class="container">
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      <input id="id" v-model="articleId" type="hidden" class="form-control" name="id">
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" v-model="title" type="text" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="content">Example textarea</label>
        <textarea id="content" v-model="content" class="form-control" name="content" rows="3"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Edit Artikel</button>
    </form>
  </div>
</template>
<script>
import httpClient from "~/utils/httpClient"
export default {
  data() {
    return {
      title: "",
      content: "",
      articleId: "",
    }
  },
  mounted() {
    const params = this.$route.params
    this.getDetailData(params?.id)
  },
  methods: {
    async getDetailData(articleId) {
      const response = await httpClient("/rest/v1/article?id=eq." + articleId, "GET")
      const data = await response.json()
      this.title = data[0]?.title
      this.content = data[0]?.content
      this.articleId = data[0]?.id
    },
    async onFormSubmit() {
      const dataForm = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
      }

      // const response = await httpClient("/rest/v1/article?id=eq." + this.articleId, "PATCH", JSON.stringify(dataForm))
       const response = await fetch("https://xjjeyccncvvwigqgsrrg.supabase.co/rest/v1/article?id=eq." + this.articleId,{
        method: "PATCH",
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqamV5Y2NuY3Z2d2lncWdzcnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzE3NjEsImV4cCI6MjAxMjA0Nzc2MX0.F2Kx403IhhG_8zQXshNnrXv5AM71DtTl2lnLEMBbEZ8",
          "Content-Type": "application/json",
          prefer: "return=representation",
        },
        body: JSON.stringify(dataForm)
      })
      const data =  await response?.json()
      this.$router.push(`/detail/${data[0]?.id}`)
    }
  }
}
</script>
