import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Home</h1>
      <Link to="pokemon">
        <span className="text-xl text-blue-600 hover:underline">Pokemon</span>
      </Link>
    </div>
  );
};
