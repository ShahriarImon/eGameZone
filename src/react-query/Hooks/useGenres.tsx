import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface GenreQuery {
  pageNo: number;
  pageSize: number;
  userId: number | undefined;
}
export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  games_count: number;
}

const useGenres = (query: GenreQuery) => {
  const todoService = new APIClient<Genre>("/genres", query);

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["Genres", query],
    queryFn: todoService.get,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGenres;
