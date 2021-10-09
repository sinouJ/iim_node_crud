<template>
    <div :class="{focus: this.toggle}">
        <input 
            type="text" 
            :name="name" 
            :id="name" 
            :placeholder="placeholder" 
            @focus="toggleFocus" 
            @blur="toggleFocus" 
            autocomplete="off"
            v-model="text"
        >
    </div>
</template>

<script>
export default {
    name: 'TextInput',
    data: () => ({
        toggle: false,
        text: ''
    }),
    props: {
        name: String,
        placeholder: String
    },
    methods: {
        toggleFocus: function() {this.toggle = !this.toggle}
    },
    watch: {
        text: function(newValue, oldValue) {
            this.$emit('update', newValue)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    div {
        position: relative;
        transition: all .5s ease;
        width: 100%;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            background-color: $primary;
            left: 0;
            bottom: -2px;
            border-radius: 2px;
            transition: inherit;
        }

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: $gray-border;
            left: 0;
            bottom: -2px;
            border-radius: 2px;
        }

        &.focus {
            color: $primary;

            &::after {
                transform: scaleX(1)
            }
        }

        input {
            border: 0;
            outline: none;
            color: $black;
            display: block;
            width: 100%;

            &::placeholder {
                color: $gray-light;
            }
        }
    }
</style>