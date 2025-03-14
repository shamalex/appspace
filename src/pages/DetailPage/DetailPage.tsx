import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getCharacterById } from "../../utils/characterApi";
import styles from "./DetailPage.module.css";
import { Character } from "../../components/CharacterCard/CharacterCard.types";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id!);
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  useEffect(() => {
    if (character) {
      document.title = `${character.name} - Character Details`;
    } else {
      document.title = "Loading...";
    }

    return () => {
      document.title = "Character List";
    };
  }, [character]);

  if (!character) {
    return <div className="loader"></div>;
  }

  const { name, image, status, location, species, gender } = character;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{character.name}</h1>
      <img src={image} alt={name} className={styles.image} />
      <p>
        Status: <strong>{status}</strong>
      </p>
      <p>
        Species: <strong>{species}</strong>
      </p>
      <p>
        Gender: <strong>{gender}</strong>
      </p>
      <p>
        Location: <strong>{location.name}</strong>
      </p>
      <Link to={`/?${searchParams.toString()}`} className={styles.backLink}>
        Back to list
      </Link>
    </div>
  );
};

export default DetailPage;
