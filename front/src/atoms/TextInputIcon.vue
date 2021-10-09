<template>
    <div class="inputIcon" :class="{focus: this.toggle}">
        <b-icon :icon="icon"></b-icon>
        <input 
            type="text" 
            :placeholder="placeholder ? placeholder : null" 
            :name="name" 
            :id="name" 
            @focus="toggleFocus" 
            @blur="toggleFocus"
        >
    </div>
</template>

<script>
export default {
    name: 'TextInput',
    data: () => ({
        toggle: false
    }),
    props: {
        icon: String,
        name: String
    },
    methods: {
        toggleFocus: function() {this.toggle = !this.toggle}
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    .inputIcon {
        color: $gray-light;
        position: relative;
        transition: all .5s ease-in-out;
        width: 100%;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            background-color: $primary;
            left: 0;
            bottom: -5px;
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
            bottom: -5px;
            border-radius: 2px;
        }

        &.focus {
            color: $primary;

            &::after {
                transform: scaleX(1)
            }
        }

        .b-icon {
            margin-right: 10px;
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