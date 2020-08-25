<template>
  <div class="myWishinglists">
    <div v-if="$store.getters.isLoggedIn">
      <b-table :data="data" :columns="columns" @click="selectedItem" :selected.sync="selected"
               v-if="data.length > 0"></b-table>
      <div v-else>You have not created a list yet</div>
      <button class="button is-medium" @click="createList">Create List</button>
    </div>
    <div v-else>
      You are not currently logged in
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "myWishinglists",
  methods: {
    async getLists() {
      try {
        const response = await axios.get('http://localhost:3000/lists', {withCredentials: true})
        this.data = response.data
      } catch (error) {
        console.log(error)
      }
    },
    createList() {
      this.$router.push('/createlist')
    },
    selectedItem(event) {
      //this.style.backgroundcolor = 'green'
      console.log(event.list_url)
      this.$router.push(`/createlist/${event.list_url}`)
    }
  },
  beforeMount() {
    this.getLists()
  },
  data() {
    return {
      selected: null,
      data: [],
      columns: [
        {
          field: "list_url",
          label: "Url",
          width: "40",
          numeric: true
        },
        {
          field: "list_name",
          label: "List name"
        },

      ]
    };
  }
};
</script>
<style scoped>
.myWishinglists {
  color: green;
}
</style>