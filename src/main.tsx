import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Layout";
import { Home } from "./routes/home";
import "./index.css";
import { PokemonList } from "./routes/pokemonList";
import { Pokemon } from "./routes/pokemon";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pokemon",
        element: <PokemonList />,
        loader: () => {
          return fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
        },
      },
      {
        path: "pokemon/:name",
        element: <Pokemon />,
        loader: ({ params }) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
