import { CharacterCard } from "./character.card";
import { useCharacters } from "../hooks/use.character";
import { useEffect } from "react";

export function List() {
  const { characters, handleLoad } = useCharacters();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <ul className="characters-list row list-unstyled">
        {characters.map((item) => (
          <CharacterCard item={item} key={item.id}></CharacterCard>
        ))}
      </ul>
    </>
  );
}
