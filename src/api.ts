const API_URL = "https://api.pokemontcg.io/v2/cards";
const API_KEY = "7d0b3034-04e4-4dba-bf31-7d3ae45dbc7c";

export async function fetchPokemonSet(): Promise<Card[]> {
  const response = await fetch(`${API_URL}?q=set.id:base1`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
    cache: "force-cache",
  });
  if (response.status == 200) {
    return (await response.json()).data;
  } else throw "Fetching pokemon set failed!";
}

export async function fetchPokemonCard(pokeId: string): Promise<Card> {
  const response = await fetch(`${API_URL}/${pokeId}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
    cache: "force-cache",
  });
  if (response.status == 200) {
    return (await response.json()).data;
  } else throw "Fetching pokemon card failed!";
}

export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  abilities?: {
    name: string;
    text: string;
    type: string;
  }[];
  rules: string[];
  attacks?: {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }[];
  weaknesses: { type: string; value: string }[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: { unlimited: string; expanded: string };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: { symbol: string; logo: string };
  };
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: { unlimited: string; expanded: string };
  images: { small: string; large: string };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    };
  };
}
