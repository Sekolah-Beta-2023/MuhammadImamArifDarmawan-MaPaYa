<template>
<nav class="navbar navbar-expand-lg navbar-light py-4 px-4" style="background-color: #F7E1AE;">
  <div class="container">
      <nuxt-link class="navbar-brand" to="/">Kumpulan <span>Resep</span></nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div id="navbarToggler" class="collapse navbar-collapse me-auto">
      <ul class="navbar-nav">
        <li class="nav-item  pe-5">
          <nuxt-link class="nav-link " aria-current="page" to="/">Beranda</nuxt-link>
        </li>
        <li class="nav-item  pe-5">
          <nuxt-link class="nav-link" to="/menu">Bahan Masakan</nuxt-link>
        </li>
        <li class="nav-item  pe-5">
          <nuxt-link class="nav-link " to="/resep">Resep</nuxt-link>
        </li>
        <li class="nav-item  pe-5">
          <nuxt-link class="nav-link " to="/blog">Blog</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>
  nav{
    padding: 1rem;
  }
  .navbar{
    font-size: 1.2rem;
  }
  .navbar-nav{
    margin-left: auto;
  }
  .nav-link{
    color: var(--text-color);
  }
  /* .navbar-brand span{
    color: var(--color1);
  } */



</style>




