interface Cards {
  id: number;
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
