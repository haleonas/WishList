<template>
  <div>
    <div v-for="(item,index) in listItems" :key="index">
      <app-list-item :item="item" :remove="remove"/>
    </div>
    <button class="button is-primary is-medium"
            @click="itemForm">
      Add item to wishlist
    </button>
    <button class="button is-medium" @click="createList">Create List</button>
  </div>
</template>

<script>
import axios from 'axios'
import AddItemForm from "@/components/AddItemForm";
import ListItem from "@/components/ListItem";
import uniqid from 'uniqid'

export default {
  name: "List",
  components: {
    appListItem: ListItem
  },
  data() {
    return {
      listItems: []
    }
  },
  beforeMount() {
    this.checkList()
  },
  methods: {
    async createList() {
      if (!this.$route.params.list) {
        console.log('I have no id, create one')
        //send as a list to be added to database
        console.log(uniqid())
        return
      }

      //else send as a list to be updated in the database
      console.log('ketchup')
    },
    async checkList() {
      if (this.$route.params.list) {
        await axios.get('')

        //check if owner of the list in the backend
        //if not print not creator, clear storage and return
        //if owner show list and items

        console.log('this route had a parameter')
      }
    },
    itemForm() {
      this.$buefy.modal.open({
        parent: this,
        component: AddItemForm,
        props: {name: '', description: ''},
        hasModalCard: true,
        trapFocus: true,
        events: {
          'items-added': value => {
            this.listItems.push(value)
          }
        }
      })
    },
    remove(value) {
      const index = this.listItems.findIndex(item => item === value)
      this.listItems.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>