<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "List",
  beforeMount() {
    this.checkList()
  },
  methods: {
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