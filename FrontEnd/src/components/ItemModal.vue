<template>
  <div class="modal-card" style="width:auto">
    <header class="modal-card-head">
      <p class="modal-card-title">{{itemName}}</p>
    </header>
    <section class="modal-card-body">
      {{itemDesc}}
      <br />
      <span v-if="itemURL">{{itemURL}}</span>
    </section>
    <footer class="modal-card-foot"><button class="button" @click="$parent.close()">Close</button></footer>
  </div>
</template>

<script>
export default {
  name: "ItemModal",
  props: {
    itemName: String,
    itemDesc: String,
    itemURL: String,
  },
};
</script>

<style scoped>
</style>