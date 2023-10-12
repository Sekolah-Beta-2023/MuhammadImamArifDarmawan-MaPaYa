<template>
<div id="edit">
  <div class="container">
    <form id="tambah-artikel" @submit.prevent="onSubmit($event)">
      <h3 class="pt-3">Edit Artikel</h3>
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" v-model="formArticle.title" type="text" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="content">Isi Artikel</label>
        <Editor id="content" v-model="formArticle.content" class="form-control" name="content" rows="5"></Editor>
      </div>
      <button class="btn mt-3" style="background-color:#F7E1AE" type="submit">Edit Artikel</button>
    </form>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      const article_id = params?.id
      const originalApi = env?.supabaseApi;
      await store.dispatch('articles/fetchDetailArticle', article_id)
        return {
            article_id,
            originalApi
        }
    },
    data() {
      return {
        formArticle: {
          title: '',
          content: '',
        }
      }
    },
    mounted() {
        this.setInitialForm()
    },
    computed: {
        ...mapState('articles', ['article'])
    },
    methods: {
        ...mapActions('articles', ['editArticle','fetchDetailArticle']),
        async onSubmit(){
          try {
            await this.editArticle({id: this.article_id, body : this.formArticle});
            setTimeout(() => {
                    this.$router.push(`/detail/${this.article_id}`);
                }, 2000)
            } catch (error) {
                console.error(error)
            }
          },
          setInitialForm(){
            this.formArticle.title = this.article?.title || ''
            this.formArticle.content = this.article?.content || ''
          },
        }
    }

</script>
<style scoped>
  #edit{
    background: var(--bg-color-3);
    min-height: 100vh;
  }
</style>
