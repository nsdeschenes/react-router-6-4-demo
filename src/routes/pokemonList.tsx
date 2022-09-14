import { useQueryClient } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonList {
  results: Pokemon[];
}

export const PokemonList: React.FC = () => {
  const data = useLoaderData() as PokemonList;

  return (
    <div>
      <h2 className="font-semibold text-2xl">Pokemon List</h2>
      <ul>
        {data.results.map(({ name }) => (
          <li className="text-blue-600 hover:underline w-min">
            <Link  to={name}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
