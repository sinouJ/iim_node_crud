<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <h1>Login</h1>
    <login-form
      :password="form.password"
      :email="form.email"
    />
  </div>
</template>

<script>
import LoginForm from '../molecules/LoginForm'

export default {
    data() {
      return {
        form: {
          password: '',
          email: ''
        },
      }
    },
    computed: {
    },
    name: 'Login',
    components: {
      LoginForm
    }
}
</script>

<style>

</style>