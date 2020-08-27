<template>
  <div id="item">
    {{itemData.item_name}}
    <br>
    <button class="button is-primary" @click="showModal">Item details</button>
    <b-field label="bought?">
      <b-checkbox v-model="itemData.completed"  @change.native="completedChange"/>
    </b-field>
  </div>
</template>

<script>
import ItemModal from '@/components/ItemModal'
export default {
  name: "Item",
  
  props: {
    itemData: Object,
  },

  methods: {
    showModal(){
      this.$buefy.modal.open({
        parent:this,
        component: ItemModal,
        props: {
          itemName: this.itemData.item_name,
          itemDesc: this.itemData.item_description,
          itemURL: this.itemData.item_url
        },

        hasModalCard: true,
        trapFocus: true,

      })
    },

    completedChange(){ 
     console.log('Hi! Changes have happened')
     this.$emit('completed-change', `Hi from ${this.itemData.item_name}`)
     }
  }
};


</script>

<style scoped>
#item {
  margin-top: 5px;
}
</style>