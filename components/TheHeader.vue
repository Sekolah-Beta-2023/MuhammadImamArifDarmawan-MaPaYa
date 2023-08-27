<template>
<nav class="navbar navbar-expand-lg navbar-dark py-4" style="background-color: #32502E;">
  <div class="container-fluid ">
      <nuxt-link class="navbar-brand" to="/">Kumpulan <span>Resep</span></nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item mb-sm-2">
          <nuxt-link class="nav-link " aria-current="page" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item mb-sm-2">
          <nuxt-link class="nav-link" to="/menu">Menu</nuxt-link>
        </li>
        <li class="nav-item mb-sm-2">
          <nuxt-link class="nav-link " to="/blog">Blog</nuxt-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>
</nav>

</template>
<style scoped>
  .navbar{
    font-size: 1.2rem;
  }
  .navbar-brand span{
    color: var(--color1);
  }

  
</style>




