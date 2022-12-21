<template>
  <input
    :value="modelValue"
    @input="updateInput"
    @focus="focused"
    @blur="focusOut"
    placeholder="Searching by name"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue", "focus", "focusOut"]);

const updateInput = (e: Event) => {
  const el = e.target as HTMLInputElement;
  emit("update:modelValue", el.value);
};
const focused = () => {
  emit("focus");
};
const focusOut = () => {
  emit("focusOut");
};
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
