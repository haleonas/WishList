<template>
  <div>
    <section>Name: {{ item.name }}</section>
    <section>Description: {{item.description}}    </section>
    <section>Url: <a :href="item.url" target="_blank">Url Suggestion</a></section>
    <button class="button" @click="modalForm">Change Details</button>
    <button class="button" @click="remove(item)">Remove</button>
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
        props: {name: this.item.name, description: this.item.description,url:this.item.url},
        hasModalCard: true,
        trapFocus: true,
        events: {
          'items-added': value => {
            this.item.name = value.name
            this.item.description = value.description
            this.item.url = value.url
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>