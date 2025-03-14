import { API_URL, CHARACTERS_ENDPOINT } from "../constants/general";
import { Character, CharacterResponse } from "../types";

// Generic function to fetch data from the API
// Uses generics <T> to allow different return types
const fetchData = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_URL}${CHARACTERS_ENDPOINT}${endpoint}`);

  if (!response.ok) {
    if (response.status === 404) {
      console.warn(`No data found for: ${endpoint}`);
      return { results: [] } as T;
    }
    throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getCharacters = (queryParams = ""): Promise<CharacterResponse> =>
  fetchData<CharacterResponse>(queryParams);

export const getCharacterById = (id: string): Promise<Character> =>
  fetchData<Character>(id);
