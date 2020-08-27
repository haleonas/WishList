<template>
  <div>
    <p>{{ this.$route.params.url }}</p>
    <h3>Items</h3>
    <br />
    <ul id="users-list">
      <li :key="item.list_item_id" v-for="(item, name) in items">
       <router-link :to="{name:'details', params: {name: item.item_name, id: name}}">
         {{item.item_name}}
    
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",

  data() {
    return {
      users: [],
      items: [],
    };
  },

  beforeMount() {
    this.getItems();
  },

  methods: {
    async getItems() {

      const res = await axios.get("http://localhost:3000/itemList");
      this.items = res.data;
    },
  },
};
</script>

<style scoped>
</style>

