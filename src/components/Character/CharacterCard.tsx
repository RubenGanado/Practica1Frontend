import type { CharacterT } from "../../types";

type CharacterCardProps = {
  character: CharacterT;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>Género: {character.gender}</p>
      <p>Año de nacimiento: {character.birth_year}</p>
      <p>Altura: {character.height} cm</p>
      <p>Peso: {character.mass} kg</p>
      <p>Color de cabello: {character.hair_color}</p>
      <p>Color de piel: {character.skin_color}</p>
      <p>Color de ojos: {character.eye_color}</p>
      <p>Planeta natal: {character.homeworld}</p>
      <p>Creado en:{new Date(character.created).toLocaleDateString()}</p>
      <p>Editado en:{new Date(character.edited).toLocaleDateString()}</p>
      <p>Url: {character.url}</p>


    </div>
  );
};

export default CharacterCard;