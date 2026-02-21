import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/Character/CharacterList";
import Loader from "./components/Character/loader";
import Error from "./components/Character/error";
import type { CharacterT } from "./types";

const INITIAL_URL = "https://swapi.dev/api/people/";

const App = () => {
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(INITIAL_URL);

  const fetchCharacters = async (url: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        setError("Error en la petición");
        return;
      }

      const data = await res.json();

      setCharacters((prev) => [...prev, ...data.results]);
      setNextPage(data.next);
    } catch {
      setError("Error al obtener los datos de la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (nextPage === INITIAL_URL) {
      fetchCharacters(INITIAL_URL);
    }
  }, []);

  return (
    <div className="app">
      <h1>Star Wars Characters</h1>

      {loading && <Loader />}
      {error && <Error message={error} />}

      <CharacterList characters={characters} />

      {nextPage && !loading && (
        <button onClick={() => fetchCharacters(nextPage)}>
          Siguiente Página
        </button>
      )}
    </div>
  );
};

export default App;