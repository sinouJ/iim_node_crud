<template>
  <div class="textAreaIcon" :class="{focus: this.toggle}">
        <b-icon :icon="icon"></b-icon>
        <textarea 
            type="text" 
            :placeholder="placeholder ? placeholder : null" 
            :name="name" 
            :id="name" 
            @focus="toggleFocus" 
            @blur="toggleFocus"
            v-model="text"
        >
        </textarea>
    </div>
</template>

<script>
export default {
    name:'TextAreaIcon',
    data: () => ({
        toggle: false,
        text: ''
    }),
    props: {
        icon: String,
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

    .textAreaIcon {
        position: relative;
        transition: all .5s ease;
        display: flex;
        justify-content: space-between;

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
            &::after {
                transform: scaleX(1);
            }
        }

        .b-icon {
            margin-top: 5px;
            margin-right: 5px;
            color: $gray-light;
        }

        textarea {
            resize: none;
            outline: none;
            border: 0;
            display: block;
            width: 100%;
            min-height: 170px;

            &::placeholder {
                color: $gray-light;
            }
        }
    }
</style>