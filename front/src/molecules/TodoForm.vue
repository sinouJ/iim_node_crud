<template>
  <div>
    <form @submit.prevent ref="todoform">
        <div>
            <text-input class="title" :name="'title'" :placeholder="'Title'" @update="handleTitle"/>
            <text-area-icon :name="'description'" :icon="'justify-left'" :placeholder="'Description'" @update="handleDescription"/>
            <div class="btnForm" @click="postTodo">
                <link-btn :message="'Add task'" :route="''"/>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import todos from '../api/todos'
import Cookies from 'js-cookie'
import store from '../store/index'

import TextInput from '../atoms/TextInput'
import TextAreaIcon from '../atoms/TextAreaIcon.vue'
import LinkBtn from '../atoms/LinkBtn.vue'
import { mapGetters } from 'vuex'

export default {
    name: "TodoForm",
    store,
    computed: {
        ...mapGetters('todos',{
            title: 'title',
            description: 'description'
        })
    },
    methods: {
        postTodo: async function() {
            const req = await todos.postTodo({title: this.title, description: this.description, token: Cookies.get('token')})
            await this.$store.dispatch('todos/POST_TODO', req)
            await this.$store.dispatch('todos/GET_ALL_TODOS')
            this.$emit('clicked')
            this.$refs.todoform.reset()
        },
        handleTitle: function(e) {
            this.$store.dispatch('todos/STORE_TITLE', e)
        },
        handleDescription: function(e) {
            this.$store.dispatch('todos/STORE_DESCRIPTION', e)
        }
    },
    components: {
        TextInput,
        TextAreaIcon,
        LinkBtn,
    }
}
</script>

<style scoped lang="scss">
    form {
        .title {
            width: 70%;
            margin-bottom: 20px;
        }


        .btnForm {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;

            button {
                width: 50%;
            }
        }
    }
</style>