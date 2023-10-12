<template>
<div id="tambah">
  <div class="container">
    <h3 class="pt-3">Tambah Artikel</h3>
    <form id="tambah-artikel" @submit.prevent="onSubmit($event)">
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" type="text"  v-model="formArticle.title" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="content">Isi Artikel</label>
        <Editor id="content" v-model="formArticle.content" class="form-control"  name="content" rows="3" ></Editor>
      </div>
      <div class="input-group mt-3 mb-3">
        <input id="inputGroupFile02"  name="image" type="file" class="form-control" @change="upload()"  />
        <label class="input-group-text" for="inputGroupFile02">Upload</label>
      </div>
      <button class="btn mb-3" style="background-color: #F7E1AE;" type="submit">Tambah Artikel</button>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  middleware: 'auth',
    data() {
        return {
            formArticle: {
                title: '',
                content:'',
                image:'',
            }
        }
    },
    mounted() {
        // this.setInitialUpload();
    },
    computed: {
        ...mapState('storage', ['images', 'image'])
    },
    methods: {
        ...mapActions('articles', ['storeArticle']),
        ...mapActions('storage', ['uploadFile']),
        async onSubmit() {
            try {
                await this.storeArticle(this.formArticle);
                setTimeout(() => {
                    this.$router.push("/");
                }, 2000)
            } catch (error) {
                console.error(error)
            }
        },
        async upload() {
            try {
                const formData = new FormData();
                const file = document.querySelector("input[type=file]");
                formData.append('data-binary', file);
                await this.uploadFile({ file: `images/${Date.now()}`, body: formData, })
                this.formArticle.image.push(this.image)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style scoped>
  #tambah{
    background: var(--bg-color-3);
    min-height: 100vh;
  }
</style>
