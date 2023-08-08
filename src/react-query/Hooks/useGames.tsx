import { useQuery } from "@tanstack/react-query";
import useGameService, { FetchGamesResponse } from "../services/useGameService";

export interface gameQuery {
  pageNo: number;
  pageSize: number;
  userId: number | undefined;
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
