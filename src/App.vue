<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
