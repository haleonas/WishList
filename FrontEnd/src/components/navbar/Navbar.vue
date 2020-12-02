<template>
  <div> <!-- Vue markup need a root to function -->
    <nav class="navbar" v-show="navbarState">
      <app-links></app-links>
      <div class="navbar-end">
        <app-register></app-register>
        <app-login></app-login>
        <app-logout></app-logout>
      </div>
    </nav>
  </div>
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
  }, 
   data() {
    return {
      navbarState: this.$store.getters.isLoggedIn // take the current state and se if the user has a token or not
    }
  }  
};
</script>


<style scoped>
.navbar{
  background-color: rgba(240, 240, 240, 0.1);
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
  padding: 30px;
}
</style>
