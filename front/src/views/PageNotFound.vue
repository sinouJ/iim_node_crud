<template>
  <div>
      <h1>404</h1>
      <h2>Oops, somenthing went wrong</h2>
      <router-link class="btn btn-primary" to="/">Go back home</router-link>
  </div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
    div {
        height: calc(100vh - 56px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>