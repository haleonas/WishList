<template>
  <div>
    <div v-if="$store.getters.isLoggedIn">
      <b-table :data="data" :columns="columns" @click="selectedItem" :selected.sync="selected"
               v-if="data.length > 0"></b-table>
      <div v-else> You are not assigned any lists</div>
    </div>
    <div v-else>
      You are not currently logged in
    </div>
  </div>
</template>




<script>
import axios from 'axios'

export default {
  name: "myAssignedLists",
  methods: {
    async getLists() {
      console.log('Tjeeena')
      try {
        const response = await axios.get('http://localhost:3000/assignedlists', {withCredentials: true})
        this.data = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error)

      }

    },
    selectedItem(event) {
      console.log(event.list_url)
      this.$router.push(`/list/${event.list_url}`)
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
        {
          field: "name",
          label: "Wisher"
        }

      ]
    };
  }

};
</script>