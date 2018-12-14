<template>
  <div id="app">
    <Tasks/>
  </div>
</template>

<script>
import Tasks from './components/tasks/tasks.vue'
import taskService from './services/task';
import store from './store';

export default {
  name: 'app',
   store,
  components: {
    Tasks
  },
  async mounted() {
        // If the user is authenticated,
        // fetch the data from the API
        if (this.$store.state.tasks) {
          await taskService.getTasks(this);
        }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
