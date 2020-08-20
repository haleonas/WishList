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
  props: {
    options: Array,
    preSelected: Array
  },
 mounted() {
    this.options.map(option => {
      option.optionName = `${option.firstname} ${option.lastname} (${option.phone})`
    })
  },
  data(){
    return {
        selected: this.preSelected
      }
  },
  watch:{
    preSelected(){
      for(let i = 0; i < this.options.length; i++){
        for(let j = 0; j < this.preSelected.length; j++){
          if(this.preSelected[j].optionName === this.options[i].optionName){
            this.selected.push(this.options[i])
          }
        }
      }
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