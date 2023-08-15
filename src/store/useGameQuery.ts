import { create } from "zustand";

interface GameQuery {
  genres?: number;
  searchText?: string;
  ordering?: string;
  platforms?: number;
  pageNo?: string;
  totalPage?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenres: (genres: number) => void;
  setOrdering: (ordering: string) => void;
  setSearchText: (searchText: string) => void;
  setPlatforms: (platforms: number) => void;
}
const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
  setGenres: (genres) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genres: genres },
    })),
  setOrdering: (ordering) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, ordering },
    })),
  setPlatforms: (platforms) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platforms } })),
}));

export default useGameQuery;
