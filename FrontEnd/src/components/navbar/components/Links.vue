<template>
  <div class="navbar-start">
    <router-link to="/" class="navbar-item">Home</router-link>
    <router-link :to="{name:'myWishinglists'}" class="navbar-item" v-if="$store.getters.isLoggedIn">My Wishlists</router-link>
    <router-link :to="{name:'myAssignedLists'}" class="navbar-item" v-if="$store.getters.isLoggedIn">Assigned Wishlists</router-link>
  
  </div>
</template>

<script>
export default {
  name: "Links"
};
</script>

<style scoped>

</style>
