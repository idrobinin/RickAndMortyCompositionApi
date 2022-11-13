<template>
  <div
    class="flex w-[600px] rounded-xl overflow-hidden items-center bg-card-bg h-[215px] shadow-xl relative sm:w[100px] sm:flex-col sm:h-[540px]"
  >
    <div class="text-lg w-5/12 sm:w-full sm:overflow-hidden sm:max-h-[60%]">
      <img
        class="min-h-full absolute top-0 left-0 bg-no-repeat w-[40%] sm:min-w-full sm:relative sm:bg-cover"
        :src="character.image"
        alt=""
      />
    </div>

    <div
      class="flex flex-col p-5 text-slate-100 sm:self-start sm:justify-between sm:h-[50%]"
    >
      <h2 class="name font-extrabold text-2xl">{{ character.name }}</h2>

      <div class="flex items-center gap-1 mb-3">
        <span
          class="inline-block rounded-full w-2.5 h-2.5"
          :style="{ backgroundColor: dotStyles }"
        ></span>
        <span>{{ character.status }}</span>
        <span> - </span>
        <span>{{ character.species }}</span>
      </div>

      <div class="mb-3">
        <p class="text-gray-400">Last known location:</p>
        <div>{{ character.location.name }}</div>
      </div>

      <div>
        <p class="text-gray-400">First seen in:</p>
        <div>Episode № {{ character.firstEpisodeOfCharacter }}</div>
        <div>{{ character.firstEpisode }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cards from "@/types/Cards";

export default defineComponent({
  name: "CharacterCard",

  props: {
    character: {
      type: Object as PropType<Cards>,
      required: true,
    },
    firstEpisode: {
      type: String,
      default: "no info",
    },
    dotStyles: {
      type: String,
      required: true,
    },
  },
});
</script>
