import { useLoaderData } from "react-router-dom";
import { Card, fetchPokemonSet } from "../api";
import PokemonCard from "../components/PokemonCard";
import sharedStyles from "./shared.module.scss";

export async function loader() {
  return (await fetchPokemonSet()).filter((card) =>
    card.types?.map((type) => type.toLowerCase()).includes("grass")
  );
}

export default function () {
  const cards = useLoaderData() as Card[];

  return (
    <>
      <h1>Touch Grass</h1>
      <div className={sharedStyles.pokeContainer}>
        {cards.map((card) => (
          <PokemonCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
