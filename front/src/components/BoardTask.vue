<template>
  <div class="board">
        <h3>
            {{title}}
            <notification-number
                :count="todos ? todos.length : null"
                :bgColor="bgColor"
                :textColor="textColor"
            />
        </h3>
        <btn-icon
            :icon="icon"
            :bgColor="bgColor"
            :textColor="textColor"
            @clicked="clicked"
        />
        <section v-if="show && todos.length > 0" class="card-container">
            <card-todo
                class="card-todo"
                v-for="todo in todos"
                :todotext="todo.title"
                :username="todo.user.username"
                :date="new Date(todo.updatedAt)"
                :description="todo.description"
                :key="todo.id"
                :completed="todo.completed"
                @checked="checkTodo(todo)"
            />
        </section>
        <section v-else-if="todos.length === 0 && show" class="card-container">
            <p>Empty</p>
        </section>
        <section v-else class="card-container">
            <p>Loading ...</p>
        </section>
  </div>
</template>

<script>
import BtnIcon from '../atoms/BtnIcon'
import CardTodo from '../components/CardTodo'
import NotificationNumber from '../atoms/NotificationNumber'

export default {
    name: 'BoardTask',
    components: {
        BtnIcon,
        CardTodo,
        NotificationNumber
    },
    props: {
        show: Boolean,
        todos: Array,
        title: String,
    },
    data() {
        return {
            handleShow: this.show,
            handleTodos: this.todos,
            textColor: '#54AC9B',
            bgColor: '#E9F1F0',
            icon: 'plus'
        }
    },
    methods: {
        checkTodo: function(todo) {this.$store.dispatch('todos/CHECK_TODO', todo)},
        clicked: function() {this.$emit('clicked')}
    },
    computed: {
        getTodos: function () {
            return this.$store.getters;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    .board {
        background-color: $primary-background;
        width: calc((100% / 3) - 20px);
        padding: 15px 10px;
        border-radius: $radius;
        overflow-y: scroll;
        height: calc(98vh - 64px);

        h3 {
            font-size: $h3;
            color: $black;
            text-align: left;
            position: relative;
            margin-bottom: 20px;

            .notification-number {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                margin: auto;
            }
        }
    }
</style>