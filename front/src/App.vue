<template>
  <div id="app">
    <div class="app-content">
      <div class="leftcontent">
        <side-menu
          :links="links"
          :bottomLinks="bottomLinks"
        />
      </div>
      <div class="rightcontent">
        <navbar/>
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

export default {
  components: {
    Navbar,
    SideMenu
  },
  data() {
    return {
      tokenAuth: null,
      links: [
        {title: 'Overview', icon: 'house', route: '/', isActive: true},
        {title: 'Projects', icon: 'folder', route: '/projects', isActive: false},
        {title: 'Stats', icon: 'graph-up', route: '/stats', isActive: false},
        {title: 'Calendar', icon: 'calendar2-date', route: '/calendar', isActive: false}
      ],
      bottomLinks: [
        {title: 'Settings', icon: 'gear-wide-connected', route: '/settings', isActive: false},
        {title: 'Logout', icon: 'box-arrow-left', route: '', isActive: false, method: this.logout}
      ]
    }
  },
  methods: {
    logout: function() {
      Cookies.remove('token', {path: ''})
      const logCookie = Cookies.get('token')
      logCookie ? null : this.$store.dispatch('users/REMOVE_TOKEN')
    }
  },
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-content {
  display: flex;
  align-items: center;

  .leftcontent {
    position: fixed;
    top: 0;
    left: 0;
    width: 25vw;
  }
  .rightcontent {
    margin-left: 25vw;
    width: 75vw;
    overflow-x: hidden;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
