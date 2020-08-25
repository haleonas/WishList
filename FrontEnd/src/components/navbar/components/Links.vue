<template>
  <div class="navbar-start">
    <router-link to="/" class="navbar-item">Logo/Name</router-link>
    <router-link :to="{name:'myWishinglists'}" class="navbar-item">My Wishlists</router-link>
    <router-link :to="{name:'myAssignedLists'}" class="navbar-item">Assigned Wishlists</router-link>
  
  </div>
</template>

<script>
export default {
  name: "Links"
};
</script>

<style scoped>

</style>
