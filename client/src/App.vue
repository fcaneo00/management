<template>
  <div id="app">
    <NavBar v-if="isLoggedIn" :userName="name"></NavBar>
    <router-view></router-view>
  </div>
</template>

<style>

</style>

<script>
import NavBar from '@/components/Navbar.vue'

export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
      name: null
    }
  },
  methods: {

  },
  components: {
    NavBar
  }
}
</script>
