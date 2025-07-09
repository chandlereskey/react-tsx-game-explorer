import { useEffect, useState } from "react";
import type { Game } from "../services/game-service";
import gameService from "../services/game-service";

const useGames = () => {
 const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // get -> promise -> response/error

    setLoading(true);
    const { game_samples, cancel } = gameService.getAll();
    setGames(game_samples)

    return cancel;
  }, []); //make sure to add [] if you are updating a state

  return { games, error, isLoading, setGames, setError }
}

export default useGames