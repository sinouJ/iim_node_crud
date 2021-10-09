import todos from '../../api/todos'
import users from '../../api/users'

const state = {
    todos: [],
    openTodos: [],
    doingTodos: [],
    closedTodos:[],
    show: false,
    title: '',
    description: ''
}

const getters = {
    todos: state => {
        return {
            openTodos: state.openTodos,
            doingTodos: state.doingTodos,
            closedTodos: state.closedTodos
        }
    },
    show: state => state.show,
    title: state => state.title,
    description: state => state.description
}

const actions = {
    GET_ALL_TODOS: async ({ commit }) => {
        commit('getTodos', await todos.getTodos(state))
        commit('sortTodos')
    },
    GET_USER_BY_TODO: async({commit, dispatch}) => {
        await dispatch('GET_ALL_TODOS')
        commit('getUserById')
    },
    POST_TODO: async ({commit}, todo) => {
        commit('postTodo', await todo)
        commit('getUserById')
    },
    CHECK_TODO: ({ commit }, id) => {
        commit('toggleCompleteTodo', id)
    },
    STORE_TITLE: ({commit}, payload) => {
        commit('storeTitle', payload)
    },
    STORE_DESCRIPTION: ({commit}, payload) => {
        commit('storeDescription', payload)
    },
    RESET_STORE_POSTED_TODO: ({commit}) => {
        commit('resetTitle')
        commit('resetDescription')
    }
}

const mutations = {
    getTodos: (state, payload) => {
        state.todos = payload
    },
    getUserById: async (state) => {
        for (let i = 0; i < state.todos.length; i++) {
            const el = state.todos[i];
            const user = await users.getUserById(el.UserId)
            el.user = user
        }
        state.show = true
    },
    toggleCompleteTodo: async (state, selectedTodo) => {
        const index = state.todos.findIndex( todo => todo.id === selectedTodo.id)
        selectedTodo = await todos.checkTodo(selectedTodo)
        state.todos.splice(index, 1, {...selectedTodo, user: await users.getUserById(selectedTodo.UserId)})
    },
    postTodo: async (state, payload) => {
        const getUser = await users.getUserById(payload.UserId)
        payload.user = getUser
        state.todos.push(payload)
    },
    sortTodos: async (state) => {
        const todos = await state.todos
        state.openTodos = todos.filter(todo => todo.completed === false && todo.doing === false)
        state.doingTodos = todos.filter(todo => todo.completed === false && todo.doing === true)
        state.closedTodos = todos.filter(todo => todo.completed === true && todo.doing === false)
    },
    storeTitle: (state, payload) => {
        state.title = payload
    },
    storeDescription: (state, payload) => {
        state.description = payload
    },
    resetTitle: (state) => {
        state.title = ''
    },
    resetDescription: (state) => {
        state.description = ''
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}