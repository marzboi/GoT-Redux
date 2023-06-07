import { useCallback, useEffect, useMemo, useState } from "react";
import { Character } from "../models/character";
import { ApiRepository } from "../services/api.repository";
import { consoleError } from "../services/errros";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const characterUrl = "http://localhost:3000/characters/";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacter = await repo.getAll();
    setCharacters(loadedCharacter);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleKill = async (character: Character) => {
    try {
      const updatedCharacter = await repo.update(character.id, {
        ...character,
        alive: false,
      });
      setCharacters(
        characters.map((item) =>
          item.id === character.id ? updatedCharacter : item
        )
      );
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    characters,
    handleKill,
  };
}
