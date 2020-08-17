<template>
  <div>

    <button class="button is-medium" @click="createList"></button>
  </div>
</template>

<script>
import axios from 'axios'

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
    }
  }
}
</script>

<style scoped>

</style>