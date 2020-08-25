<template>
  <nav class="navbar">

    <app-links></app-links>

    <div class="navbar-end">
      <app-register></app-register>
      <app-login></app-login>
      <app-logout></app-logout>
    </div>
  </nav>
</template>

<script>
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Links from './components/Links'

export default {
  components: {
    appRegister: Register,
    appLogin: Login,
    appLogout: Logout,
    appLinks: Links
  }
};
</script>

<style scoped>
</style>
