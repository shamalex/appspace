import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.css";
import { Character } from "./CharacterCard.types";

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <Link to={`/details/${character.id}`} className={styles.card}>
    <img src={character.image} alt={character.name} loading="lazy" />
    <h3>{character.name}</h3>
  </Link>
);
