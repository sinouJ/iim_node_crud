<template>
    <div class="menu_dropdown_card">
        <b-icon icon="three-dots" @click="clicked"></b-icon>
        <div class="menu" :class="isVisible ? 'visible' : null">
            <ul>
                <li>
                    <b-icon icon="check2-circle"></b-icon>
                    <p>Mark as done</p>
                </li>
                <li>
                    <b-icon icon="pencil-square"></b-icon>
                    <p>Edit</p>
                </li>
                <li>
                    <b-icon icon="trash"></b-icon>
                    <p>Delete</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuDropdownCard',
    props: {
        isVisible: Boolean
    },
    methods: {
        clicked: function() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../scss/main.scss';

    .menu_dropdown_card {
        cursor: pointer;
        color: $primary;

        .menu {
            position: absolute;
            background-color: white;
            box-shadow: $shadow-primary;
            z-index: 10;
            padding: 0 20px;
            border-radius: $radius;
            border: 1px solid $gray-border;
            transition: all ease .5s;
            transform: translateY(-20px);
            opacity: 0;
            visibility: hidden;

            &.visible {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }

            ul {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                margin: 0;
                padding: 0;
                transition: inherit;

                li {
                    text-align: left;
                    display: flex;
                    align-items: center;
                    padding: 5px 0;
                    color: $gray-light;
                    transition: inherit;

                    &:not(:last-child) {

                        border-bottom: 1px solid $gray-border;
                    }

                    p {
                        margin: 0 10px;
                    }

                    &:hover {
                        color: $primary;
                    }
                }
            }
        }
    }
</style>