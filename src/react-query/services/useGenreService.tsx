import { FetchResponse, Genre, GenreQuery } from "../Hooks/useGames";
import APIClient from "./apiClient";

const useGenreService = (query: GenreQuery) => {
  return new APIClient<FetchResponse<Genre>>("/genres", query);
};
export default useGenreService;
