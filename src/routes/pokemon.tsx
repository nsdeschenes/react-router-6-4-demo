import { useLoaderData } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
}

export const Pokemon: React.FC = () => {
  const data = useLoaderData() as Pokemon;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Pokemon</h1>
      <div className="flex flex-row">
        <img
          className="w-64"
          style={{ imageRendering: "pixelated" }}
          src={data.sprites.front_default}
        />
        <div>
          <h3>{data.name}</h3>
          
        </div>
      </div>
    </div>
  );
};
