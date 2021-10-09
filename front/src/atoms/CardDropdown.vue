<template>
  <div class="dropdown-card" :class="{active}">
      <div v-for="link in links" :key="link.title" @click="clicked">
          <link-btn :message="link.title" :route="link.route"/>
      </div>
  </div>
</template>

<script>
import LinkBtn from './LinkBtn'

export default {
    name: 'CardDropdown',
    components: {
        LinkBtn
    },
    props: {
        links: Array,
        active: Boolean
    },
    methods: {
        clicked: function() {
            this.$emit('clicked')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    .dropdown-card {
        box-sizing: border-box;
        position: absolute;
        right: 10px;
        min-width: 220px;
        padding: 10px;
        background-color: $primary-background;
        border-radius: $radius;
        transition: all .5s ease;
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;
        z-index: 1;
        box-shadow: $shadow-primary;

        &.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
</style>