<template>
    <a href="#" @click.prevent="clicked">
        {{text}}
        <b-icon-chevron-down></b-icon-chevron-down>
    </a>
</template>

<script>
export default {
    name: "LinkDropdown",
    props: {
        text: String
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

    a {
        font-weight: bold;
        color: $black;
        text-transform: capitalize;

        &:visited {
            color: $black;
        }

        &:hover {
            color: $black;
            text-decoration: none;
        }
    }
</style>