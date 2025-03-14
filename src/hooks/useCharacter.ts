import { useEffect, useState } from "react";
import { Character } from "../types";
import { getCharacterById } from "../utils/characterApi";

export const useCharacter = (id: string | undefined) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchCharacter = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
        setError("Failed to load character.");
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, isLoading, error };
};
