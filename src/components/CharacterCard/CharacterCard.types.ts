import { Location } from "../../types";

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Location;
  location: Location;
  episode: string[];
};

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
