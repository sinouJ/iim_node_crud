<template>
  <nav>
      <div class="logo-container">
          <img src="../assets/logo.png">
      </div>
      <div class="navigation">
            <div class="top-navigation">
                <link-icon
                    v-for="link in links"
                    :title="link.title"
                    :icon="link.icon"
                    :key="link.title"
                    :isActive="link.isActive"
                    :route="link.route"
                />
            </div>
            <div class="bottom-navigation">
                <div v-for="link in bottomLinks" :key="link.title">
                    <link-icon
                        v-if="link.method"
                        :title="link.title"
                        :icon="link.icon"
                        :isActive="link.isActive"
                        :route="link.route"
                        @clicked="link.method"
                    />
                    <link-icon
                        v-else
                        :title="link.title"
                        :icon="link.icon"
                        :isActive="link.isActive"
                        :route="link.route"
                    />
                </div>
            </div>
      </div>
  </nav>
</template>

<script>
import LinkIcon from '../atoms/LinkIcon.vue'
export default {
  components: { LinkIcon },
    name: 'SideMenu',
    props: {
        links: Array,
        bottomLinks: Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    nav {
        width: 100%;
        height: 100vh;
        border-right: 1px solid $gray-border;
        padding: 10px 0;
        box-sizing: initial;

        .logo-container {
            height: 45px;
            margin: 10px 0 40px;
            padding: 0 30px;

            img {
                display: block;
                max-height: 100%;
                max-width: 100%;
            }
        }

        .navigation {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: calc(100vh - 135px);
            padding-bottom: 50px;
        }
    }
</style>