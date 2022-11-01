<template>

  <div>
    <input type="checkbox"
           :name="checkbox.name"
           :id="checkbox.id"
           :value="checkbox.value"
           :checked="checked"
           v-model="localCheckValue"
           class="mr-4">
    <label :for="checkbox.id" class="select-none">{{checkbox.label}}</label>
  </div>

</template>

<script lang="ts">

import {defineComponent, PropType} from "vue";
import Checkbox from "@/types/Checkbox";

export default defineComponent(
    {
      name: "MyCheckbox",
      props:{
        checkbox: {
          type: Object as PropType <Checkbox>,
          required:true
        },
        checked:{
          type:Boolean
        },
        modelValue:{
          type:Boolean
        },
      },
      computed: {
        localCheckValue: {
          get() {
            return this.modelValue
          },
          set(newValue:boolean) {
            this.$emit('update:modelValue', newValue)
          },
        },
      },
    })
</script>

<style scoped>

</style>