import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  games_count: number;
}

const useGenres = () => {
  const todoService = new APIClient<Genre>("/genres");

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["Genres"],
    queryFn: todoService.get,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGenres;
