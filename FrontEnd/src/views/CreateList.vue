<template>
  <div>
      <div v-for="(item,index) in listItems" :key="index">
        <app-hej-varlden :item="item" :remove="remove"></app-hej-varlden>
      </div>
      <button class="button is-primary is-medium"
              @click="itemForm">
        Add item to wishlist
      </button>
    <button class="button is-medium" @click="createList"></button>
  </div>
</template>

<script>
import axios from 'axios'
import AddItemForm from "@/components/AddItemForm";

export default {
  name: "List",
  data(){
    return {
      listItems: []
    }
  },
  beforeMount() {
    this.checkList()
  },
  methods: {
    async createList(){

    },
    async checkList() {
      await axios.get('')
      if (this.$route.params.list) {
        console.log('this route had a parameter')
      }
    },
    itemForm(){

    }
  },

}
</script>

<style scoped>

</style>