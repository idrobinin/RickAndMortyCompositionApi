import Cards from "@/types/Cards";
import { ref } from "vue";

export function useNameSearching(cards: any, defaultCards: any) {
  const searchedName = ref("");
  const searchedByName = () => {
    cards.value = defaultCards.value.filter((el: Cards) =>
      el["name"].toLowerCase().includes(searchedName.value.toLowerCase())
    );
  };
  return {
    searchedName,
    searchedByName,
  };
}
