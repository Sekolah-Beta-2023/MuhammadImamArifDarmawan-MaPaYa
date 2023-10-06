<template>
  <div id="index">
    <the-hero></the-hero>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Kumpulan Resep</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur repellendus architecto rem quis
              corrupti quos possimus, doloribus, hic sunt reprehenderit totam quam, tenetur vel accusantium et
              voluptatibus nulla aperiam delectus.</p>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa, natus Lorem ipsum dolor sit amet.!</p>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa, natus Lorem ipsum dolor sit amet.!</p>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa, natus Lorem ipsum dolor sit amet.!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="article">
      <div class="container">
      <h2 class="text-start mb-2">Artikel Terbaru</h2>
      <nuxt-link class="btn mb-3 text-end" style="background-color: #F7E1AE;" to="/form/tambah">Tambah Article</nuxt-link>
      <div class="row article-row">
        <TheCard
          v-for="(item, index) of articles"
          :key="index"
          :title="item?.title"
          :description=item?.content
          :article-id="item?.id"
          :image="item?.image?.length > 0 ? `${supabaseApi}/storage/v1/object/public/${item?.image}`: 'https://flowbite.com/docs/images/blog/image-1.jpg'"
        />

      <!-- <div class="col-lg-4  text-center mb-sm-5 mx-auto ">
      <div class="card mx-auto" >
        <img src="../assets/images/hero1.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-start">Cara Membuat Rendang</h5>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        </div>
      </div>
      <div class="col-lg-4 text-center mb-sm-5 mx-auto">
      <div class="card mx-auto" >
        <img src="../assets/images/hero1.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-start">Cara Membuat Rendang</h5>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        </div>
      </div>
      <div class="col-lg-4  text-center mb-sm-5 mx-auto ">
      <div class="card mx-auto" >
        <img src="../assets/images/hero1.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-start">Cara Membuat Rendang</h5>
          <nuxt-link :to="'/article/1'">Lihat Selengkapnya</nuxt-link>
        </div>
        </div>
      </div> -->
      </div>
      </div>
    </section>
  </div>
</template>

<script>
  // import { mapActions, mapState } from 'vuex'
  import TheCard from "../components/TheCard.vue";

  export default {
    name: 'IndexPage',
    components: { TheCard },
    data() {
      return {
        supabaseApi: process.env.supabaseApi,
        articles: [],
      }
    },
    mounted(){
      this.getArticles();
    },
    methods: {
      async getArticles() {
        const response = await this.$axios.get("/rest/v1/article", {
          headers: {
            apikey: process.env.supabaseKey
          }
        })

        this.articles = response?.data
      },
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
  .article-row{
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
  /* HIDE SCROLL BAR */
    *{ scrollbar-width: none }

  .card{
    margin-left: 10px;
    background: var(--bg-color-1);
  }

  .card-title{
    text-decoration: underline;
    padding-bottom: 150px;
  }

  .card-body a{
    color: black;
    text-decoration: none;
  }
</style>
