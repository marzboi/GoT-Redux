import { useCallback, useMemo } from "react";
import { Character } from "../models/character";
import { ApiRepository } from "../../core/services/api.repository";
import { useAppSelector } from "../../core/store/hook";
import { AppDispatch } from "../../core/store/store";
import { useDispatch } from "react-redux";
import {
  killCharacterAsync,
  loadCharacterAsync,
  toggleWarcry,
} from "../redux/character.slice";

export function useCharacters() {
  const { characters, warcry, currentCharacter } = useAppSelector(
    (state) => state.characters
  );
  const dispatch: AppDispatch = useDispatch();

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>("http://localhost:3000/characters/"),
    []
  );

  const handleLoad = useCallback(async () => {
    dispatch(loadCharacterAsync(repo));
  }, [repo, dispatch]);

  const handleKill = async (character: Character) => {
    dispatch(killCharacterAsync({ repo, character }));
  };

  const handleWarcry = (character: Character) => {
    dispatch(toggleWarcry(character));
    setTimeout(() => {
      dispatch(toggleWarcry({ warcry: "" }));
    }, 2000);
  };

  return {
    characters,
    handleLoad,
    handleKill,
    handleWarcry,
    warcry,
    currentCharacter,
  };
}
