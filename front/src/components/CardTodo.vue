<template>
    <div class="card_task">
        <header>
            <h3>
                <span></span>
                {{todotext}}
            </h3>
        </header>
        <main>
            <p>{{description}}</p>
        </main>
        <footer>
            <menu-dropdown-card @clicked="toggleMenu" :isVisible="isVisible"/>
            <div class="author">
                <p>Created by <b>{{username}}</b></p>
                <span>-</span>
                <p>{{intlDate}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime';
import MenuDropdownCard from '../molecules/MenuDropdownCard.vue';


export default {
    components: { MenuDropdownCard },
    name: 'CardTodo',
    props: {
        username: String,
        todotext: String,
        completed: Boolean,
        date: Date,
        description: String
    },
    data: function() {
        return{
            isVisible: false
        }
    },
    computed: {
        intlDate: function() {
            dayjs.extend(relativeTime)
            const duration = dayjs(this.date).fromNow()

            return duration
            }
        },
    methods: {
        checkTodo: function() {
            this.$emit("checked")
        },
        toggleMenu: function() {
            this.isVisible = !this.isVisible
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    .card_task {
        width: 100%;
        margin-bottom: 35px;
        border-radius: $radius;
        box-shadow: $shadow-primary;
        padding: 15px;
        background-color: white;

        header {
            box-sizing: border-box;

            h3 {
                color: $black;
                text-align: left;
                position: relative;
                padding-left: 15px;
                font-size: $h3;

                span {
                    position: absolute;
                    height: 4px;
                    width: 4px;
                    background-color: $primary;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    border-radius: 50%;
                }
            }
        }

        main {
            p {
                text-align: left;
                color: $gray;
                font-weight: 500;
            }
        }

        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .author {
                display: flex;
                justify-content: flex-end;
                align-items: center;

                p {
                    text-align: right;
                    color: $gray-light;
                    font-size: 10px;
                    margin-bottom: 0;
                }

                span {
                    margin: 0 5px;
                    color: $gray-light;
                    font-size: 10px;
                }
            }
        }
    }
</style>
