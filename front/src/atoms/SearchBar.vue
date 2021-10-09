<template>
  <form class="searchbar" @submit.prevent="search">
    <b-icon icon="search"></b-icon>
    <input type="text" placeholder="Search" @focus="toggleFocus" @blur="toggleFocus">
  </form>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
      search: () => {
        false
      },
      toggleFocus: function() {
        const form = document.querySelector('form')
        form.classList.toggle('focus')
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '../scss/main.scss';

  form {
    color: $gray-light;
    position: relative;
    transition: all .5s ease-in-out;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transform-origin: center left;
      height: 2px;
      background-color: $primary;
      left: 0;
      bottom: -5px;
      border-radius: 2px;
      transition: inherit;
    }

    &.focus {
      color: $primary;

      &::after {
        transform: scaleX(1)
      }
    }

    .b-icon {
      margin-right: 10px;
    }
    
    input {
      border: 0;
      outline: none;
      color: $black;

      &::placeholder {
        color: $gray-light;
      }
    }
  }
  
</style>