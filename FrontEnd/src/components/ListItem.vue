<template>
  <div>
    <section>Name: {{ item.item_name }}</section>
    <section>Description: {{item.item_description}}    </section>
    <section v-show="item.item_url">Url: <a :href="item.item_url" target="_blank">Url Suggestion</a></section>
    <button class="button" @click="modalForm">Change Details</button>
    <button class="button" @click="remove(item)">Remove</button>
    <hr>
  </div>
</template>

<script>
import AddItemForm from "@/components/AddItemForm";

export default {
  name: "listItem",
  props: {
    item: Object,
    remove: Function
  },
  methods: {
    modalForm() {
      this.$buefy.modal.open({
        parent: this,
        component: AddItemForm,
        props: {name: this.item.item_name, description: this.item.item_description,url:this.item.item_url},
        hasModalCard: true,
        trapFocus: true,
        events: {
          'items-added': value => {
            this.item.item_name = value.item_name
            this.item.item_description = value.item_description
            this.item.item_url = value.item_url
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>