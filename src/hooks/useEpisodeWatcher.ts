import Cards from "@/types/Cards";
import { ref, watch } from "vue";

export function useEpisodeWatcher(
  cards: any,
  searchedName: any,
  defaultCards: any
) {
  const selectedEpisode = ref("");
  const episodeWatcher = (newValue: string) => {
    if (newValue) {
      cards.value = defaultCards.value;
      cards.value = cards.value.filter(
        (el: Cards) => el["location"]["name"] === newValue
      );
      searchedName.value = "";
    }
  };
  watch(selectedEpisode, episodeWatcher);
  return { defaultCards, searchedName, cards, episodeWatcher, selectedEpisode };
}
