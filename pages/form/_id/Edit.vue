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
        <label for="content">Isi Artikel</label>
        <textarea id="content" v-model="formProduct.content" class="form-control" name="content" rows="3"></textarea>
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
      const product_id = params?.id
      const originalApi = env?.supabaseApi;
      await store.dispatch('products/fetchDetailProduct', product_id)
        return {
            product_id,
            originalApi
        }
    },
    data() {
      return {
        formProduct: {
          title: '',
          content: '',
        }
      }
    },
    mounted() {
        this.setInitialForm()
    },
    computed: {
        ...mapState('products', ['product'])
    },
    methods: {
        ...mapActions('products', ['editProduct','fetchDetailProduct']),
        async onSubmit(){
          try {
            await this.editProduct({id: this.product_id, body : this.formProduct});
            setTimeout(() => {
                    this.$router.push(`/detail/${this.product_id}`);
                }, 2000)
            } catch (error) {
                console.error(error)
            }
          },
          setInitialForm(){
            this.formProduct.title = this.product?.title || ''
            this.formProduct.content = this.product?.content || ''
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
