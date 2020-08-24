<template>
  <div class="myWishinglists">
    <b-table :data="data" :columns="columns" @click="selectedItem" :selected.sync="selected"></b-table>
    <!--<section v-for = "item in data" :key = "item.list_id">
      {{item.list_name}}
    </section>-->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "myWishinglists",
  methods:{
    async getLists(){
      try {
        const response = await axios.get('http://localhost:3000/lists',{withCredentials:true})
        this.data = response.data
      } catch (error) {
        console.log(error)
        
      }
      
    },
    selectedItem(event){
      //this.style.backgroundcolor = 'green'
      console.log(event.list_url)
      this.$router.push(`/createlist/${event.list_url}`)
    }
  },
  beforeMount(){
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