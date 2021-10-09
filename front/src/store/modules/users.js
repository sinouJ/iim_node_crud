const state = {
    token: null
}

const getters = {
    token: state => state.token
}

const actions = {
    STORE_TOKEN: ({commit}, token) => {
        commit('token', token)
    },
    REMOVE_TOKEN: ({commit}) => {
        commit('logout')
    }
}

const mutations = {
    token: (state, token) => {
        state.token = {
            isLogged: true,
            token
        }
    },
    logout: (state) => {
        state.token = null
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}