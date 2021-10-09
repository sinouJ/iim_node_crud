<template>
    <div class="modal-container" :class="{open: this.open}">
        <div class="modal">
            <header>
                <h3>
                    {{title}}
                </h3>
                <b-icon icon="x" scale="2" @click="clicked"></b-icon>
            </header>
            <main>
                <slot name="main"></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: String,
        open: Boolean
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

    .modal-container {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: $black;
            opacity: 0;
            visibility: hidden;
            z-index: 99;
            transition: opacity .5s ease-in-out;
        }

        &.open {
            &::before {
                opacity: $layout-opacity;
                visibility: visible;
            }

            .modal {
                transform: translate(-50%, -50%);
                visibility: visible;
                opacity: 1;
            }
        }

        .modal {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -100%);
            z-index: 100;
            min-height: 250px;
            height: auto;
            width: 55%;
            visibility: hidden;
            opacity: 0;
            background-color: white;
            border-radius: $radius;
            transition: all .5s ease-in-out;

            header {
                min-height: 70px;
                border-bottom: 1px solid $gray-border;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .b-icon {
                    color: $primary;
                    margin-right: 20px;

                    &:hover {
                        cursor: pointer;
                    }
                }

                h3 {
                    margin: 0;
                    padding-left: 20px;
                }
            }

            main {
                padding: 20px;
            }

            footer {
                padding: 20px;
            }
        }
    }
</style>