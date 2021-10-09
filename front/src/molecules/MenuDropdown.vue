<template>
    <div class="menu-dropdown">
        <link-dropdown
            :text="text"
            @clicked="toggleMenu(), positionCardDropdown()"
        />
        <card-dropdown
            :links="links"
            :active="isMenuActive"
            @clicked="toggleMenu"
        />
    </div>
</template>

<script>
import CardDropdown from '../atoms/CardDropdown'
import LinkDropdown from '../atoms/LinkDropdown'

export default {
    name: 'MenuDropdown',
    data() {
        return {
            isMenuActive: false
        }
    },
    props: {
        links: Array,
        text: String
    },
    components: {
        CardDropdown,
        LinkDropdown
    },
    methods: {
        toggleMenu: function() {
            this.isMenuActive = !this.isMenuActive
        },
        positionCardDropdown: () => {
            const card = document.querySelector('.dropdown-card')
            const cardHeight = card.offsetHeight
            card.style = `bottom: -${cardHeight+10}px`
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-dropdown {
        position: relative;
    }
</style>