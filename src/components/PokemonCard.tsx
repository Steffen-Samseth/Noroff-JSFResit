import { Link } from "react-router-dom";
import { Card } from "../api";
import styles from "./PokemonCard.module.scss";

export default function ({ card }: Props) {
  return (
    <div className={styles.pokeCard}>
      <div className={styles.image}>
        <img src={card.images.small} alt={card.name} />
      </div>

      <Link to={`/pokemon/${card.id}`} role="button">
        {card.name}
      </Link>
    </div>
  );
}

interface Props {
  card: Card;
}
