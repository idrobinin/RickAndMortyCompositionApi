import { computed, ref } from "vue";
import Cards from "@/types/Cards";
import cards from "@/types/Cards";

export function useSortedCards(cards: any) {
  //пропсы для сортировки
  const selectedOption = ref("");

  //   // сортировка по имени или номеру эпизода
  const sortedCards = computed((): Array<Cards> => {
    if (selectedOption.value !== "firstEpisodeOfCharacter") {
      return [...cards.value].sort((card1, card2) => {
        return card1[selectedOption.value]?.localeCompare(
          card2[selectedOption.value]
        );
      });
    } else {
      return [...cards.value].sort((card1, card2) => {
        return card1[selectedOption.value] - card2[selectedOption.value];
      });
    }
  });

  return {
    selectedOption,
    sortedCards,
  };
}
