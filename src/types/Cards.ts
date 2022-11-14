type Loc = {
  [key: string]: string;
};

interface IObjectKeys {
  [key: string]: string | number | Loc;
}

interface Cards extends IObjectKeys {
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
