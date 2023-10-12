<template>
<div id="tambah">
  <div class="container">
    <h3 class="pt-3">Tambah Informasi Gizi</h3>
    <form id="tambah-artikel" @submit.prevent="onSubmit($event)">
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" type="text"  v-model="formArticle.title" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="energi">Energi &#40; Kkal &#41; </label>
        <input id="energi" type="text"  v-model="formArticle.energi" class="form-control" name="energi">
      </div>
      <div class="form-group">
        <label for="protein">Protein &#40; gram &#41; </label>
        <input id="protein" type="text"  v-model="formArticle.protein" class="form-control" name="protein">
      </div>
      <div class="form-group">
        <label for="lemak">Lemak &#40; gram &#41;</label>
        <input id="lemak" type="text"  v-model="formArticle.lemak" class="form-control" name="lemak">
      </div>
      <div class="form-group">
        <label for="karbohidrat">Karbohidrat &#40; gram &#41;</label>
        <input id="karbohidrat" type="text"  v-model="formArticle.karbohidrat" class="form-control" name="karbohidrat">
      </div>
      <button class="btn mb-3 mt-3" style="background-color: #F7E1AE;" type="submit">Tambah Informasi Gizi</button>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            formArticle: {
                title: '',
                energi: '',
                protein:'',
                lemak: '',
                karbohidrat:''
            }
        }
    },
    mounted() {
        // this.setInitialUpload();
    },
    computed: {
        // ...mapState('storage', ['images', 'image'])
    },
    methods: {
        ...mapActions('informations', ['storeInformation']),
        async onSubmit() {
            try {
                await this.storeInformation(this.formArticle);
                setTimeout(() => {
                    this.$router.push("/");
                }, 2000)
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>

<style scoped>
  #tambah{
    background: var(--bg-color-3);
    min-height: 100vh;
  }
</style>
