import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

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
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

const useGames = (query: gameQuery) => {
  const todoService = new APIClient<Game>("/games", query);

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", query],
    queryFn: todoService.get,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGames;
