<template>
   <div class="col-lg-4  text-center mb-sm-5 mx-auto ">
      <div class="card mx-auto" >
        <img class="rounded-t-lg w-full h-[200px] object-cover" :src="image" alt="" />
        <div class="card-body">
          <h5 class="card-title text-start">{{title}}</h5>
          <p class="card-content text-start ">{{description}}</p>
          <nuxt-link :to="`/detail/${articleId}`">Lihat Selengkapnya</nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      articleId: {
        type: String,
        default:""
      },
      image:{
        type: String,
        default:""
      }
    }
  }
</script>

<style scoped>
.card{
    margin-left: 10px;
    background: var(--bg-color-1);
  }

  .card-title{
    font-size: 1.5rem;
    text-decoration: none;
  }
  .card-body a{
    color: black;
    text-decoration: none;
  }
  .card-content{
    font-size: 1.2rem;
  }
</style>

