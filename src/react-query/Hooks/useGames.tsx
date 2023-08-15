import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQuery from "../../store/useGameQuery";
import { platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  const todoService = new APIClient<Game>("/games", { params: gameQuery });

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: todoService.get,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGames;
