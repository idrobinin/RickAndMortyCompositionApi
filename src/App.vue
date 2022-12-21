<template>
  <div id="app">
    <my-header />

    <div
      class="flex mx-auto items-end mb-2.5 mt-6 justify-center items-center gap-4 sm:flex-col sm:gap-2 sm:w-10/12"
    >
      <my-select
        class="sm:w-full"
        v-model="selectedOption"
        :options="sortOptions"
        :searchBy="sortBy"
      />
      <my-select
        class="sm:w-full"
        v-model="selectedEpisode"
        :options="getData(locationList)"
        :searchBy="filterBy"
      />
    </div>

    <div
      class="flex mx-auto items-end mb-2.5 justify-center items-center gap-4 sm:flex-col sm:gap-2 sm:w-10/12"
    >
      <my-button class="sm:order-3 sm:w-full" @click="resetAllFilters"
        >Reset all</my-button
      >
      <my-input
        class="block sm:w-full"
        v-model.trim="searchedName"
        @keydown.enter="searchedByName"
      />
      <my-button class="sm:w-full" @click="searchedByName">Search</my-button>
    </div>

    <my-content v-if="!isCardsLoading" class="py-16" :cards="sortedCards" />
    <div
      v-else
      class="pt-12 text-center text-2xl italic min-h-screen bg-content-bg text-pink-200"
    >
      Cards loading...
    </div>

    <div class="flex justify-center bg-content-bg py-20">
      <my-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import MyHeader from "@/components/MyHeader.vue";
import MyContent from "@/components/MyContent.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyFooter from "@/components/MyFooter.vue";
import Cards from "@/types/Cards";
import { usePosts } from "@/hooks/usePosts";
import { useSortedCards } from "@/hooks/useSortedCards";
import { useNameSearching } from "@/hooks/useNameSearching";

//пропсы для сортировки

const sortOptions = [
  { value: "name", name: "by name" },
  { value: "firstEpisodeOfCharacter", name: "by episode" },
];

//пропсы для фтильтра
const sortBy = "Sort by";
const filterBy = "Choose location";
const selectedEpisode = ref("");

const { cards, defaultCards, isCardsLoading, getData, locationList } =
  usePosts();
const { selectedOption, sortedCards } = useSortedCards(cards);
const { searchedName, searchedByName } = useNameSearching(cards, defaultCards);

// сбрасываем все фильтры (не уверен в правильности этого решения)
const resetAllFilters = () => {
  location.reload();
};

watch(selectedEpisode, (newValue: string) => {
  if (newValue) {
    cards.value = defaultCards.value;
    cards.value = cards.value.filter(
      (el: Cards) => el["location"]["name"] === newValue
    );
    searchedName.value = "";
  }
});
</script>
