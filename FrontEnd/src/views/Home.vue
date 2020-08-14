<template>
  <div class="home">
    <label>
      username
      <input type="text" v-model="username">
    </label>
    <label>
      username
      <input type="password" v-model="password">
    </label>
    <button @click="loginUser">Click</button>

    <app-name-selector @name-selected="updateSelected"></app-name-selector>
    {{ selected }}

  </div>
</template>

<script>
import NameSelector from "@/components/NameSelector";
import axios from 'axios'

export default {

  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
      selected: []
    }
  },
  components: {
    appNameSelector: NameSelector
  },
  methods: {
    updateSelected(item) {
      this.selected = item
    },
    async loginUser() {
      await axios.post('http://localhost:3000/login',
          {
            username: this.username,
            password: this.password
          },{withCredentials:true})
    }
  }
}
</script>
