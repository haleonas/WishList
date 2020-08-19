<template>
  <div>
    <v-select
        multiple
        label="optionName"
        :options="options"
        v-model="selected"
        @input="$emit('name-selected',selected)"
    />
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css'

export default {
  name: "NameSelector",
  data() {
    return {
      selected: [],
      options: [
        {optionName: "Jesper (altes@live.se)", name: "Jesper", email: "altes@live.se"},
        {optionName: "Maria (maria.edstrom@live.se)", name: "Maria", email: "maria.edstrom@live.se"},
        {optionName: "Kurt (kurt.johansson@live.se)", name: "Kurt", email: "kurt.johansson@live.se"},
        {optionName: "Markus (markus.karlsson@live.se)", name: "Markus", email: "markus.karlsson@live.se"},
        {optionName: "Monika (monika.musak@live.se)", name: "Monika", email: "monika.musak@live.se"}
      ]
    }
  },
  watch: {
    'selected': function () {
      console.log('value changed')
    }
  },
  methods: {
    test() {
      console.log('fan')
    }
  }
}
</script>

<style scoped>

</style>