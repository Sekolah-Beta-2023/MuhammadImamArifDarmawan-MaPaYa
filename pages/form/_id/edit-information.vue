<template>
<div id="edit">
  <div class="container">
    <form id="tambah-artikel" @submit.prevent="onSubmit($event)">
      <h3 class="pt-3">Edit Informasi gizi</h3>
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" v-model="formArticle.title" type="text" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="energi">Energi &#40; KKal &#41;</label>
        <input id="energi" v-model="formArticle.energi" type="text" class="form-control" name="energi">
      </div>
      <div class="form-group">
        <label for="protein">Protein &#40; gram &#41;</label>
        <input id="protein" v-model="formArticle.protein" type="text" class="form-control" name="protein">
      </div>
      <div class="form-group">
        <label for="lemak">Lemak &#40; gram &#41;</label>
        <input id="lemak" v-model="formArticle.lemak" type="text" class="form-control" name="lemak">
      </div>
      <div class="form-group">
        <label for="karbohidrat">Karbohidrat &#40; gram &#41;</label>
        <input id="karbohidrat" v-model="formArticle.karbohidrat" type="text" class="form-control" name="karbohidrat">
      </div>
      <button class="btn mt-3" style="background-color:#F7E1AE" type="submit">Simpan informasi Gizi</button>
    </form>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      const information_id = params?.id
      const originalApi = env?.supabaseApi;
      await store.dispatch('informations/fetchDetailInformation', information_id)
        return {
            information_id,
            originalApi
        }
    },
    data() {
      return {
        formArticle: {
          title: '',
          energi: '',
          protein: '',
          lemak: '',
          karbohidrat:'',
        }
      }
    },
    mounted() {
        this.setInitialForm()
    },
    computed: {
        ...mapState('informations', ['information'])
    },
    methods: {
        ...mapActions('informations', ['editInformation','fetchDetailInformation']),
        async onSubmit(){
          try {
            await this.editInformation({
              id: this.information_id,
              body : this.formArticle
            });
            setTimeout(() => {
                    this.$router.push(`/`);
                }, 2000)
            } catch (error) {
                console.error(error)
            }
          },
          setInitialForm(){
            this.formArticle.title = this.information?.title
            this.formArticle.energi = this.information?.energi
            this.formArticle.protein = this.information?.protein
            this.formArticle.lemak = this.information?.lemak
            this.formArticle.karbohidrat = this.information?.karbohidrat
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
