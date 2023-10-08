<template>
<div id="tambah">
  <div class="container">
    <h3 class="pt-3">Tambah Artikel</h3>
    <form id="tambah-artikel" @submit.prevent="onSubmit($event)">
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" type="text"  v-model="formProduct.title" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="content">Isi Artikel</label>
        <textarea id="content" v-model="formProduct.content" class="form-control"  name="content" rows="3" ></textarea>
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
    data() {
        return {
            formProduct: {
                title: '',
                content: '',
                image:''
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
        ...mapActions('products', ['storeProduct']),
        ...mapActions('storage', ['uploadFile']),
        async onSubmit() {
            try {
                // const formData = new FormData();
                // const thumbnailFile = document.querySelector("input[type=file]");
                // formData.append('name', this.formProduct.name)
                // formData.append('description', this.formProduct.description)
                // formData.append('colors', this.formProduct.colors)
                // formData.append('price', this.formProduct.price)
                // formData.append('images_product', thumbnailFile.files[0].name)
                await this.storeProduct(this.formProduct);
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
                formData.append('data-binary', file.files);
                await this.uploadFile({ file: `images/${Date.now()}.${file.files[0].name.split('.')[1]}`, body: formData, })
                this.formProduct.image.push(this.image)
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
