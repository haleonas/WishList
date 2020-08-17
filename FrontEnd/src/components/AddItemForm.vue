<template>
  <form>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">add a new item</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Name of item">
          <b-input type="text" v-model="itemName" placeholder="Name of the item" required></b-input>
        </b-field>
        <b-field label="Description of item">
          <b-input type="text" v-model="itemDescription" placeholder="Description of item" required/>
        </b-field>
        <b-field label="Url suggestion">
          <b-input type="text" v-model="itemUrl" placeholder="Url suggestion" required/>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">close</button>
        <button @click="test" class="button is-primary" v-if="itemName && itemDescription">add item</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "addItemForm",
  props: {
    name: String,
    description: String,
    url:String
  },
  data() {
    return {
      itemName: this.$props.name,
      itemDescription: this.$props.description,
      itemUrl: this.$props.url
    }
  },
  methods: {
    test() {
      this.$parent.close()
      this.$emit('items-added', {name: this.itemName, description: this.itemDescription,url:this.itemUrl})
      this.itemName = ''
      this.itemDescription = ''
      this.itemUrl = ''
    }
  }
}
</script>

<style scoped>

</style>