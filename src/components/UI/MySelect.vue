<template>

  <select class="py-2.5 px-3.5 text-xl inline-block h-12 outline-none text-slate-500 border-solid border-[1px] border-[#ccc] shadow-md rounded-md bg-[#eee]" v-model="localModelValue">
    <option disabled value="">
      {{searchBy}}
    </option>
    <option :key="option.value" :value="option.value" v-for="option in options">{{option.name}}</option>
  </select>

</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Select from "@/types/Select"

export default defineComponent({
      name: "MySelect",
      props:{
        modelValue:{
          type:String
        },
        options:{
          type:Array as PropType <Select[]>,
          required:true
        },
        searchBy:String,
      },

     computed: {
       localModelValue: {
         get() {
           return this.modelValue
         },
         set(newValue:string) {
           this.$emit('update:modelValue', newValue)
         },
       },
     },
    })

</script>
