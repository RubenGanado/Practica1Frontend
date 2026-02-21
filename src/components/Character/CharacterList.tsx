import CharacterCard from "./CharacterCard";
import type { CharacterT } from "../../types";

type CharacterListProps = {
  characters: CharacterT[]; 
};

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div className="character-list">
      {characters.map((char) => (
        <CharacterCard key={char.name} character={char} />
      ))}
    </div>
  );
};

export default CharacterList;