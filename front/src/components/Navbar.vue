<template>
  <nav>
      <search-bar/>
      <div class="right-content">
          <menu-dropdown
            v-if="user"
            :links="linksUser"
            :text="user.username"
          ></menu-dropdown>
          <menu-dropdown
            v-else
            :links="links"
            :text="'Hi'"
          ></menu-dropdown>
      </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

import users from '../api/users'

import MenuDropdown from '../molecules/MenuDropdown'
import SearchBar from '../atoms/SearchBar'

export default {
    components: {
        MenuDropdown,
        SearchBar
    },
    data: () => ({
        links: [
            {title: 'Login', route: '/login'},
            {title: 'Signup', route: '/signup'},
        ],
        linksUser: [
            {title: 'My dashboard', route: '/profile'}
        ]
    }),
    asyncComputed: {
        ...mapGetters('users', {
            token: 'token'
        }),
        user: function () {
            if (this.token && this.token.isLogged) {
                const verifiedToken = jwt.verify(this.token.token, 'secret')
                if (verifiedToken) {
                    const user = users.getUser(this.token.token)
                    return user
                }
            }
        }
    },
    mounted() {
        const logCookie = Cookies.get('token')
        if (logCookie) {
            this.$store.dispatch('users/STORE_TOKEN', logCookie)
        }
    }
}
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
</style>