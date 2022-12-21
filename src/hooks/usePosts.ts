import axios from "axios";
import { onBeforeMount, onMounted, ref } from "vue";
import Cards from "@/types/Cards";
import EpisodesObj from "@/types/Episodes";

export function usePosts() {
  const cards = ref([]);
  const defaultCards = ref([]);
  const isCardsLoading = ref(false);
  const episodesArr = ref([]);
  const episodes = ref([]);
  const locationList = ref([]);

  const fetchCards = async () => {
    try {
      isCardsLoading.value = true;
      const response = await axios.get<Cards[]>(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,183"
      );

      response.data.forEach((el: Cards) => {
        const slashIndex: number = el.episode[0].lastIndexOf("/") + 1;
        const firstEpisodeNum: number = +el.episode[0].slice(slashIndex);
        el.firstEpisode = episodes.value[firstEpisodeNum - 1];
        el.firstEpisodeOfCharacter = firstEpisodeNum;

        //массив эпизодов героев на странице
        locationList.value.push(el["location"]["name"]);
      });
      // получаем данные в основную модель
      cards.value = response.data;
      // запасная модель
      defaultCards.value = cards.value;
      isCardsLoading.value = false;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  // получаем массив эпизодов
  const fetchLastSeenPlace = async () => {
    try {
      const response = await axios.get<EpisodesObj>(
        "https://rickandmortyapi.com/api/episode/"
      );
      episodesArr.value = response.data.results;
      episodesArr.value.forEach((el) => {
        episodes.value.push(el["name"]);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  // создаем массив для options по эпизоду
  const getData = (arrArrs: string[]) => {
    const newArr = [...new Set(arrArrs)];
    return newArr.map((val) => ({
      ["name"]: val.toString(),
      ["value"]: val.toString(),
    }));
  };

  onMounted(fetchCards);
  onBeforeMount(fetchLastSeenPlace);

  return { cards, defaultCards, isCardsLoading, getData, locationList };
}
