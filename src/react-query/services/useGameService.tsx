import { postQuery } from "../Hooks/useGames";
import APIClient from "./apiClient";

export interface Game {
  id: number;
  name: string;
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGameService = (query: postQuery) => {
  return new APIClient<FetchGamesResponse>("/games", query);
};
export default useGameService;
