<template>
    <button>
        <router-link :to="route" @click.prevent>
            {{message}}
        </router-link>
    </button>
</template>

<script>
export default {
    name: 'LinkBtn',
    props: {
        message: String,
        route: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    button {
        display: block;
        width: 100%;
        max-width: 200px;
        background-color: transparent;
        border: 0;
        padding: 0;

        a {
            font-weight: bold;
            text-transform: capitalize;
            color: $primary;
            background-color: $primary-light;
            display: block;
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            margin: 5px auto;
            border-radius: $radius;

            &:visited {
                color: $primary;
            }

            &:hover {
                color: $primary;
                text-decoration: none;
            }
        }
    }
</style>