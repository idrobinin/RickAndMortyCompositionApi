<template>
 <button type="button" class="font-medium text-xl text-gray-900 border-solid border-[1px] border-orange-500 py-2.5 px-4 rounded-lg hover:text-white transition-colors
      hover:bg-orange-500">
   <slot></slot>
 </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent(
    {
      name: "MyButton"
    }
)
</script>
