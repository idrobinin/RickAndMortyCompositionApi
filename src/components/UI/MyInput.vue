<template>
  <input
    :value="modelValue"
    @input="updateInput"
    @focus="focused"
    @blur="focusOut"
    placeholder="Searching by name"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyInput",
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(e: any) {
      this.$emit("update:modelValue", e.target.value);
    },
    focused() {
      this.$emit("focus");
    },
    focusOut() {
      this.$emit("focusOut");
    },
  },
});
</script>

<style scoped>
input {
  font-size: 20px;
  height: 50px;
  outline: none;
  color: #74646e;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #999;
  background: #eee;
  padding: 10px 15px;
}
</style>
