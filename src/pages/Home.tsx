import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, fetchPokemonSet } from "../api";
import PokemonCard from "../components/PokemonCard";
import SearchField from "../components/SearchField";
import styles from "./Home.module.scss";
import sharedStyles from "./shared.module.scss";

export async function loader() {
  return fetchPokemonSet();
}

export default function () {
  const cards = useLoaderData() as Card[];
  const navigate = useNavigate();

  const options = cards.map((card) => ({ value: card.id, label: card.name }));

  return (
    <>
      <div className={styles.searchField}>
        <SearchField
          options={options}
          onSelect={(cardId) => navigate(`/pokemon/${cardId}`)}
        />
      </div>

      <div className={sharedStyles.pokeContainer}>
        {cards.map((card) => (
          <PokemonCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
