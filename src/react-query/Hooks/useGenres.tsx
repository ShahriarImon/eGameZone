import { useQuery } from "@tanstack/react-query";
import useGenreservice from "../services/useGenreservice";

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
  background_image: "string";
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = (query: GenreQuery) => {
  const todoService = useGenreservice(query);

  return useQuery<FetchGenresResponse, Error>({
    queryKey: ["Genres", query],
    queryFn: todoService.getAll,
    // queryFn: fetchTodo,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGenres;
