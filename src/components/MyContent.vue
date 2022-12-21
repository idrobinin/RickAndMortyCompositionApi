<template>
  <div id="main" class="bg-content-bg">
    <div class="container">
      <div
        v-if="cards.length > 0"
        class="flex flex-wrap gap-7 justify-center relative"
      >
        <transition-group name="card-list" appear>
          <character-card
            :character="character"
            :dotStyles="dotClasses(character.status)"
            :key="character.id"
            v-for="character in cards"
          />
        </transition-group>
      </div>
      <div v-else class="text-center text-2xl text-white">List is Empty</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import CharacterCard from "@/components/CharacterCard.vue";
import Cards from "@/types/Cards";

const props = defineProps({
  cards: {
    type: Array as PropType<Cards[]>,
    required: true,
  },
});

const dotClasses = (status: string) => {
  return status == "Dead" ? "red" : "green";
};
</script>

<style scoped>
.card-list-move {
  transition: all 0.5s ease;
}
.card-list-enter-active {
  transition: all 0.5s ease;
}
.card-list-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
.card-list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.card-list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.card-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.card-list-move {
  transition: all 0.3s ease;
}
</style>
