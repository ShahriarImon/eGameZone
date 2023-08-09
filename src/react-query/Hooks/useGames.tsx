import { useQuery } from "@tanstack/react-query";
import useGameService from "../services/useGameService";

export interface gameQuery {
  pageNo: number;
  pageSize: number;
  userId: number | undefined;
}
export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: "string";
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (query: gameQuery) => {
  const todoService = useGameService(query);

  return useQuery<FetchGamesResponse, Error>({
    queryKey: ["games", query],
    queryFn: todoService.getAll,
    // queryFn: fetchTodo,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGames;
