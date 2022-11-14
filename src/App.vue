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

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "@/components/MyHeader.vue";
import MyContent from "@/components/MyContent.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyFooter from "@/components/MyFooter.vue";
import axios from "axios";
import Cards from "@/types/Cards";

export default defineComponent({
  name: "App",
  components: {
    MyHeader,
    MyContent,
    MySelect,
    MyInput,
    MyButton,
    MyFooter,
  },
  data() {
    return {
      cards: [],
      defaultCards: [],
      isCardsLoading: false,
      episodesArr: [],
      episodes: [],
      locationList: [],

      //пропсы для сортировки
      selectedOption: "",
      sortOptions: [
        { value: "name", name: "by name" },
        { value: "firstEpisodeOfCharacter", name: "by episode" },
      ],

      //пропсы для фтильтра
      sortBy: "Sort by",
      filterBy: "Choose location",
      selectedEpisode: "",

      //пропс для поиска по имени
      searchedName: "",
    };
  },
  methods: {
    // получаем массив с героями и их характеристиками
    async fetchCards() {
      try {
        this.isCardsLoading = true;
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,183"
        );

        response.data.forEach((el: Cards) => {
          const slashIndex: number = el.episode[0].lastIndexOf("/") + 1;
          const firstEpisodeNum: number = +el.episode[0].slice(slashIndex);
          el.firstEpisode = this.episodes[firstEpisodeNum - 1];
          el.firstEpisodeOfCharacter = firstEpisodeNum;

          //массив эпизодов героев на странице
          this.locationList.push(el["location"]["name"]);
        });
        // получаем данные в основную модель
        this.cards = response.data;
        // запасная модель
        this.defaultCards = this.cards;
        this.isCardsLoading = false;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    // получаем массив эпизодов
    async fetchLastSeenPlace() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode/"
        );
        this.episodesArr = response.data.results;
        this.episodesArr.forEach((el) => {
          this.episodes.push(el["name"]);
        });
      } catch (error: any) {
        throw new Error(error);
      }
    },
    // создаем массив (пропс) для options по эпизоду
    getData(arrArrs: string[]) {
      const newArr = [...new Set(arrArrs)];
      return newArr.map((val) => ({
        ["name"]: val.toString(),
        ["value"]: val.toString(),
      }));
    },

    // поиск по имени
    searchedByName() {
      this.cards = this.defaultCards.filter((el) =>
        el["name"].toLowerCase().includes(this.searchedName.toLowerCase())
      );
    },

    // сбрасываем все фильтры (не уверен в правильности этого решения)
    resetAllFilters() {
      location.reload();
    },
  },
  watch: {
    // фильтр по эпизоду
    selectedEpisode(newValue: string) {
      if (newValue) {
        this.cards = this.defaultCards;
        this.cards = this.cards.filter(
          (el: Cards) => el["location"]["name"] === newValue
        );
        this.searchedName = "";
      }
    },
  },
  computed: {
    // сортировка по имени или номеру эпизода
    sortedCards(): Cards[] {
      if (this.selectedOption !== "firstEpisodeOfCharacter") {
        return [...this.cards].sort((card1: any, card2: Cards) => {
          return card1[this.selectedOption]?.localeCompare(
            card2[this.selectedOption]
          );
        });
      } else {
        return [...this.cards].sort((card1: Cards, card2: Cards) => {
          return +card1[this.selectedOption] - +card2[this.selectedOption];
        });
      }
    },
  },

  mounted() {
    this.fetchCards();
  },
  beforeMount() {
    this.fetchLastSeenPlace();
  },
});
</script>
