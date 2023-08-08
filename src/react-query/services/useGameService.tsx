import { FetchGamesResponse, gameQuery } from "../Hooks/useGames";
import APIClient from "./apiClient";

const useGameService = (query: gameQuery) => {
  return new APIClient<FetchGamesResponse>("/games", query);
};
export default useGameService;
