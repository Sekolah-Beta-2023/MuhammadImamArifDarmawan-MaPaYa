<template>
<div id="index">
  <the-hero></the-hero>
  <section></section>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Kumpulan Resep</h2>
          <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur repellendus architecto rem quis corrupti quos possimus, doloribus, hic sunt reprehenderit totam quam, tenetur vel accusantium et voluptatibus nulla aperiam delectus.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 text-center mb-sm-5">
          <div class="card-layanan">
            <div class="icon-layanan position-relative mx-auto">
              <img src="../assets/images/layanan1.png" class="position-absolute top-50 start-50 translate-middle" alt="">
            </div>
            <h3>Resep masakan enak</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Culpa, natus Lorem ipsum dolor sit amet.!</p>
          </div>
        </div>
        <div class="col-md-4 text-center mb-sm-5">
          <div class="card-layanan">
            <div class="icon-layanan position-relative mx-auto">
              <img src="../assets/images/layanan1.png" class="position-absolute top-50 start-50 translate-middle" alt="">
            </div>
            <h3>Berbagai Jenis resep masakan</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Culpa, natus Lorem ipsum dolor sit amet.!</p>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="card-layanan">
            <div class="icon-layanan position-relative mx-auto">
              <img src="../assets/images/layanan1.png" class="position-absolute top-50 start-50 translate-middle" alt="">
            </div>
            <h3>Banyak pilihan resep masakan</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Culpa, natus Lorem ipsum dolor sit amet.!</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>
  #index{
    background: var(--color2);
  }
  #index h2{
    font-weight: 600;
    color: #406343;
  }
  .container{
    padding  : 100px 0;
  }

.card-layanan{
    width: 100%;
    height: 313px;
    border-radius: 5px;
    background-color: #fff;
    padding: 40px;
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.05);
}

.icon-layanan{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #00985B;
}

.card-layanan h3{
  color: var(--color3);
  margin: 15px 0;
}

.card-layanan p{
  margin-top: 20px 0;

}


</style>


