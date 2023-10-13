<template>
  <footer class="footer pt-4">
      <div class="row">
        <div class="col-md-4 text-start ps-5 col-12">
          <h1>Makan apa ya Hari ini?</h1>
          <p>Menyediakan Berbagai macam resep masakan</p>
        </div>
        <div class="col-md-2 text-start offset-md-1 col-12">
        <ul class="nav-footer">
        <li>
          <nuxt-link class="nav-footer-link" to="/">Beranda</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-footer-link" to="/menu">Bahan Masakan</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-footer-link"  to="/blog">Resep</nuxt-link>
        </li>
        </ul>
        </div>
        <div class="col-md-2 text-start offset-md-1 col-12">
          <h5>Get Connected</h5>
          <ul class="list-unstyled">
            <li>Indramayu</li>
            <li>Indonesia</li>
            <li>mapaya@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6 ps-5">
          <p>Copyright 2023 Mapaya</p>
        </div>
        <div class="col-md-6">
        </div>
      </div>
  </footer>
</template>

<style scoped>
  .footer{
    background: #F7E1AE;
  }
  .nav-footer{
    list-style-type: none;
  }
  .nav-footer li{
    padding-bottom:10px;
  }
  .nav-footer-link{
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
  }
</style>


