import { useCallback, useMemo } from "react";
import { Character } from "../models/character";
import { ApiRepository } from "../../core/services/api.repository";
import { consoleError } from "../../core/services/errros";
import { useAppSelector } from "../../core/store/hook";
import { AppDispatch } from "../../core/store/store";
import { useDispatch } from "react-redux";
import { loadCharacterAsync } from "../redux/character.slice";

export function useCharacters() {
  // const [characters, setCharacters] = useState<Character[]>([]);

  const { characters } = useAppSelector((state) => state.characters);
  const dispatch: AppDispatch = useDispatch();

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>("http://localhost:3000/characters/"),
    []
  );

  const handleLoad = useCallback(async () => {
    dispatch(loadCharacterAsync(repo));
  }, [repo, dispatch]);

  // const handleKill = async (character: Character) => {
  //   try {
  //     const updatedCharacter = await repo.update(character.id, {
  //       ...character,
  //       alive: false,
  //     });
  //     setCharacters(
  //       characters.map((item) =>
  //         item.id === character.id ? updatedCharacter : item
  //       )
  //     );
  //   } catch (error) {
  //     consoleError(error);
  //   }
  // };

  return {
    characters,
    handleLoad,
  };
}
