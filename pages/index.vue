<template>
  <div id="index">
    <the-hero></the-hero>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Kumpulan Resep</h2>
            <p>Menyajikan Informasi Mengenai Berbagai Macam resep masakan dan juga Informasi gizi pada masakan dan bahan masakan</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 text-center mb-sm-5">
            <div class="card-layanan">
              <div class="icon-layanan position-relative mx-auto">
                <img
                  src="../assets/images/layanan1.png" class="position-absolute top-50 start-50 translate-middle"
                  alt="">
              </div>
              <h3>Resep masakan enak</h3>
              <p>Resep Masakan Sudah Terjamin Karena sudah di coba oleh para pakar makanan!</p>
            </div>
          </div>
          <div class="col-lg-4 text-center mb-sm-5">
            <div class="card-layanan">
              <div class="icon-layanan position-relative mx-auto">
                <img
                  src="../assets/images/layanan1.png" class="position-absolute top-50 start-50 translate-middle"
                  alt="">
              </div>
              <h3>Berbagai Jenis resep masakan</h3>
              <p>Tersedia Berbagai Jenis resep masakan dari seluruh Dunia.!</p>
            </div>
          </div>
          <div class="col-lg-4 text-center">
            <div class="card-layanan">
              <div class="icon-layanan position-relative mx-auto">
                <img
                  src="../assets/images/layanan1.png" class="position-absolute top-50 start-50 translate-middle"
                  alt="">
              </div>
              <h3>Banyak pilihan resep masakan</h3>
              <p>Pilih Resep masakan yang di inginkan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="article">
      <div class="container">
      <h2 class="text-start mb-2">Artikel Terbaru</h2>
      <div v-if="user">
      <nuxt-link class="btn mb-3 text-end" style="background-color: #F7E1AE;" to="/form/tambah">Tambah Article</nuxt-link>
      </div>
      <div class="row article-row">
        <TheCard
          v-for="(item, index) of articles"
          :key="index"
          :title="item?.title"
          :cara_membuat=item?.content
          :article-id="item?.id"
          :image="item?.image?.length > 0 ? `${originalApi}/storage/v1/object/public/images/${item?.image}`: 'https://img.freepik.com/free-photo/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate_1150-27184.jpg?'"
        />
      </div>
        <h2 class="text-start mb-2">
        Informasi Gizi
      </h2>
      <div v-if="user">
          <nuxt-link class="btn mb-3 text-end" style="background-color: #F7E1AE;" to="/form/tambah-information">Tambah Informasi Gizi</nuxt-link>
      </div>
      <div class="row informations-row">
      <div class="col-lg-4  text-center mb-sm-5 mx-auto  " v-for="information of informations" :key="information?.id">
      <div class="card mx-auto"  >
        <img class="rounded-t-lg w-full h-[200px] object-cover" :src="information?.image?.length > 0 ? `${originalApi}/storage/v1/object/public/images/${information?.image}`: 'https://img.freepik.com/free-photo/delicious-goulash-stew-table_23-2149371744.jpg?'" alt="" />
        <div class="card-body">
          <h5 class="card-title text-start">{{information.title}}</h5>
          <p class="card-subcontent text-start "> Energi  : {{information.energi}} <strong>&#40; KKal &#41;</strong> </p>
          <p class="card-subcontent text-start "> Protein : {{information.protein}} <strong> &#40; gram &#41;</strong> </p>
          <p class="card-subcontent text-start "> lemak   : {{information.lemak}} <strong>&#40; gram &#41;</strong></p>
          <p class="card-subcontent text-start " style="padding-bottom:20px"> Karbohidrat  : {{information.karbohidrat}} <strong>&#40; gram &#41;</strong></p>
            <div v-if="user">
            <nuxt-link type="button" class="btn text-center" style="background-color: #F7E1AE;" :to="`/form/${information?.id}/edit-information`">Edit information</nuxt-link>
            <button type="button" @click="handleDelete(information?.id)" class="btn btn-danger">Delete information</button>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error})
    {
        return {
            originalApi: env?.supabaseApi
        }
    },
    data() {
        return {
          item: '',
           originalAPI: this.supabaseApi
        }
    },
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('articles', ['articles']),
        ...mapState('informations', ['informations'])
    },
    mounted() {
        this.fetchArticles()
        this.fetchInformations()
        this.setOriginalApi();
    },
    methods: {
        ...mapActions('articles', ['fetchArticles']),
        ...mapActions('informations', ['fetchInformations', 'removeInformation']),
        async handleDelete(informationId) {
            try {
                await this.removeInformation(informationId);
                this.fetchInformations()
            } catch (error) {
                console.error(error)
            }
        },
        setOriginalApi() {
            this.processEnv = this.originalApi
        }
    }
}
</script>


<style scoped>
  #index {
    background: #FFFDE3
  }

  #index h2 {
    font-weight: 600;
    color: #406343;
  }

  .container {
    padding: 100px 0;
  }

  .card-layanan {
    width: 100%;
    height: 313px;
    border-radius: 5px;
    background-color: var(--bg-color-1);
    padding: 40px;
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.05);
  }

  .icon-layanan {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #00985B;
  }

  .card-layanan h3 {
    color: var(--color3);
    margin: 15px 0;
  }

  .card-layanan p {
    margin-top: 20px 0;
  }


  /* article section */
  .article-row,
  .informations-row
  {
    /* max-height: 400px; */
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .article-row::-moz-scrollbar{
    display: none;
  }
  .article-row::-webkit-scrollbar{
    display: none;
  }
  .article-row::scrollbar{
    display: none;
  }
  .informations-row::-webkit-scrollbar{
      display: none;
  }


  /* HIDE SCROLL BAR */
    *{ scrollbar-width: none }

  .card{
    margin-left: 10px;
    background: var(--bg-color-1);
  }

  .card-subcontent{
    margin: 0;
  }


  .card-body a{
    color: black;
    text-decoration: none;
  }
</style>
