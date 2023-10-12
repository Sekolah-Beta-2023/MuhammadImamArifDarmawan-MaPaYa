<template>
<div id="signin">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center mb-5">
        <h2>Login</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-5">
        <div class="login-wrap p-4 p-md-5">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="fa fa-user-o"></span>
          </div>
          <h3 class="text-center mb-4">Sign In</h3>
          <NotifiCation :message="error" v-if="error" />
          <form  @submit.prevent="onSubmit($event)" class="login-form">
            <div class="mb-3">
              <input type="email" v-model="formSignin.email" name="email"  class="form-control rounded-start" placeholder="email" required="">
            </div>
            <div class="mb-3 d-flex">
              <input type="password" v-model="formSignin.password" name="password" class="form-control rounded-start" placeholder="Password" required="">
            </div>
            <div class="mb-3">
              <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
            </div>
            <div class="mb-3">
              <nuxt-link type="submit" class="form-control btn btn-primary rounded submit px-3" to="/">Kembali</nuxt-link>
            </div>
            <div class="input-group d-md-flex">
              <div class="w-50">
                <nuxt-link to="/auth/signup">
                Belum Punya Akun ?
                </nuxt-link>
              </div>
              <div class="w-50 text-md-end">
                <a href="#">Forgot Password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import NotifiCation from '~/components/NotifiCation'
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    comments: {
      NotifiCation,
    },
    layout: 'sign',
    middleware: ['is-not-auth'],
    data() {
      return {
        formSignin: {
          email: '',
          password: '',
        },

        successMessage: '',
        error: null,
      }
    },
    computed: {

    },
    methods: {
      ...mapActions('auth', ['login']),
      async onSubmit() {
        try {
          await this.login(this.formSignin);
          this.successMessage = "Berhasil melakukan login"
          setTimeout(() => {
            this.$router.push('/');
          }, 3000)
        } catch (error) {
          console.error(error);
          this.error = "Email atau Password salah"
        }
      }
    },
  }

</script>

<style scoped>
  #signin{
    background: #f8f9fd;
  }

  .login-wrap {
  position: relative;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
}


</style>
