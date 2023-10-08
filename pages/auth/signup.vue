<template>
<div id="signup">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center mb-5">
        <h2>Buat Akun</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-5">
        <div class="login-wrap p-4 p-md-5">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="fa fa-user-o"></span>
          </div>
          <h3 class="text-center mb-4">Sign Up</h3>
          <form  @submit.prevent="onSubmit()" class="login-form">
            <div class="mb-3">
              <input type="email" v-model="formSignup.email" name="email"  class="form-control rounded-start" placeholder="email" required="">
            </div>
            <div class="mb-3 d-flex">
              <input type="password" v-model="formSignup.password" name="password" class="form-control rounded-start" placeholder="Password" required="">
            </div>
            <div class="mb-3">
              <button type="submit" class="form-control btn btn-primary rounded submit px-3">Register</button>
            </div>
            <div class="mb-3">
              <nuxt-link type="submit" class="form-control btn btn-primary rounded submit px-3" to="/">Kembali</nuxt-link>
            </div>
            <div class="input-group d-md-flex">
              <div class="w-50">
                <nuxt-link to="/auth/signin">
                Sudah Punya Akun ?
                </nuxt-link>
              </div>
              <div class="w-50 text-md-end">
                <nuxt-link to="/">Forgot Password</nuxt-link>
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
import { mapActions } from "vuex";

export default {
    layout: 'sign',
    middleware: ['is-not-auth'],
    data() {
        return {
            formSignup: {
                email: '',
                password: '',
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions('auth', ['register']),
        async onSubmit() {
            try {
                await this.register(this.formSignup);
                this.$router.push('/auth/signin');
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style scoped>
#signup{
    background: #f8f9fd;
  }

  .login-wrap {
  position: relative;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
}

</style>
