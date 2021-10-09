<template>
  <div>
    <modal
      :title="title"
      :open="open"
      @clicked="clicked"
    >
      <template v-slot:main>
        <todo-form @clicked="clicked"></todo-form>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from '../molecules/Modal'
import TodoForm from '../molecules/TodoForm'

export default {
  data() {
    return {
      title: 'Add a task'
    }
  },
  props: {
    open: Boolean
  },
  name:'ModalFormTasks',
  components: {
    Modal,
    TodoForm
  },
  methods: {
    clicked: function() {
      this.$emit('clicked')
    }
  }
}
</script>

<style>

</style>