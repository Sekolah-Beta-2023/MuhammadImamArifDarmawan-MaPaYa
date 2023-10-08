<template>
<div id="edit">
  <div class="container">
    <form id="tambah-artikel" @submit.prevent="onSubmit($event)">
      <h3 class="pt-3">Edit Artikel</h3>
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" v-model="formProduct.title" type="text" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="energi">Energi</label>
        <input id="energi" v-model="formProduct.energi" type="text" class="form-control" name="energi">
      </div>
      <div class="form-group">
        <label for="protein">Protein</label>
        <input id="protein" v-model="formProduct.protein" type="text" class="form-control" name="protein">
      </div>
      <div class="form-group">
        <label for="lemak">Lemak</label>
        <input id="lemak" v-model="formProduct.lemak" type="text" class="form-control" name="lemak">
      </div>
      <div class="form-group">
        <label for="karbohidrat">Karbohidrat</label>
        <input id="karbohidrat" v-model="formProduct.karbohidrat" type="text" class="form-control" name="karbohidrat">
      </div>
      <button class="btn mt-3" style="background-color:#F7E1AE" type="submit">Simpan information</button>
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
        formProduct: {
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
              body : this.formProduct
            });
            setTimeout(() => {
                    this.$router.push(`/`);
                }, 2000)
            } catch (error) {
                console.error(error)
            }
          },
          setInitialForm(){
            this.formProduct.title = this.information?.title
            this.formProduct.energi = this.information?.energi
            this.formProduct.protein = this.information?.protein
            this.formProduct.lemak = this.information?.lemak
            this.formProduct.karbohidrat = this.information?.karbohidrat
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
