import { useState } from "react";
import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import { Card, fetchPokemonCard } from "../api";
import styles from "./Pokemon.module.scss";

export function loader({ params }: LoaderFunctionArgs) {
  if (params.id) return fetchPokemonCard(params.id);
  else return null;
}

export default function () {
  const [viewMore, setViewMore] = useState(false);
  const [viewJson, setViewJson] = useState(false);
  const card = useLoaderData() as Card;
  const { id } = useParams();

  return (
    <>
      <div>
        <h1 className={styles.title}>{card.name}</h1>
        <div className={styles.imageWrapper}>
          <img src={card.images.large} />
          <button
            className={styles.viewMoreButton}
            onClick={() => setViewMore(true)}
          >
            view more
          </button>
        </div>
      </div>

      {viewMore && (
        <>
          <div className={styles.firstRow}>
            <div className={styles.leftCell}>
              <div>
                Evolves from
                <h2>{card.evolvesFrom || "-"}</h2>
              </div>
            </div>
            <div className={styles.middleCell}>
              {card.nationalPokedexNumbers && (
                <>
                  <h2>General information</h2>
                  {card.nationalPokedexNumbers && (
                    <div className={styles.generalInfo}>
                      National Pokedex number: {card.nationalPokedexNumbers}
                    </div>
                  )}
                  {card.level && (
                    <div className={styles.generalInfo}>
                      Level: {card.level}
                    </div>
                  )}
                  {card.hp && (
                    <div className={styles.generalInfo}>HP: {card.hp}</div>
                  )}
                  {card.types && (
                    <div className={styles.generalInfo}>Type: {card.types}</div>
                  )}
                </>
              )}
              {card.abilities?.map((ability) => (
                <div className={styles.abilities}>
                  <h2>Ability</h2>
                  <div>Ability name: {ability.name}</div>
                  <div>Ability info: {ability.text}</div>
                  <div>Ability type: {ability.type}</div>
                </div>
              ))}
              {card.attacks?.map((attack) => (
                <div className={styles.attacks}>
                  <h2>Attack(s)</h2>
                  <div>Attack: {attack.name}.</div>
                  <div>Cost: {attack.cost + "."}</div>
                  <div>Damage: {attack.damage}.</div>
                  <div>Description: {attack.text}</div>
                </div>
              ))}
              {card.number && (
                <div className={styles.cardNumber}>
                  <h2>Number and set</h2>
                  <div>
                    This card is number {card.number} in the "{card.set.name}"
                    set
                  </div>
                </div>
              )}

              <button
                className={styles.viewMoreButton}
                onClick={() => setViewJson(true)}
              >
                view JSON
              </button>
            </div>
            <div className={styles.rightCell}>
              <div>
                Evolves to
                <h2>{card.evolvesTo || "-"}</h2>
              </div>
            </div>
          </div>
        </>
      )}
      {viewJson && (
        <pre>
          <code>{JSON.stringify(card, undefined, 4)}</code>
        </pre>
      )}
    </>
  );
}
