interface Cards {
  id: number | string;
  status: string;
  location: {
    name: string;
  };
  firstEpisode: string;
  species: string;
  image: string;
  name: string;
  episode: string;
  firstEpisodeOfCharacter: number;
}

export default Cards;
