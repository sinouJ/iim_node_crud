<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <h1>Signup</h1>
    <signup-form
      :password="form.password"
      :email="form.email"
      :username="form.username"
    />
  </div>
</template>

<script>
import SignupForm from '../molecules/SignupForm'

export default {
    data() {
      return {
        form: {
          password: '',
          email: '',
          username: ''
        },
      }
    },
    computed: {
    },
    name: 'Signup',
    components: {
      SignupForm
    }
}
</script>

<style>

</style>