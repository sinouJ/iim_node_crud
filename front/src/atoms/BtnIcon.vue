<template>
  <div :style="`background-color: ${bgColor}; color: ${textColor}`" @click="clicked">
      <b-icon :icon="icon"></b-icon>
  </div>
</template>

<script>
export default {
    name: 'BtnComponent',
    props: {
        icon: String,
        bgColor: String,
        textColor: String
    },
    methods: {
        clicked: function() {this.$emit('clicked')}
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    div {
        cursor: pointer;
        width: 100%;
        padding: 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $radius;
        margin-bottom: 20px;
    }
</style>